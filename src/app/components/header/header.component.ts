import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';

import { ShopppingCartComponent } from '../../dialog/shoppping-cart/shoppping-cart.component';
import { ThemeService } from '../../services/theme.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Film } from '../../shared/film-model';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    SidenavComponent,
    MatMenuModule,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  listSelectedFilms: Film[] = [];
  hidden: boolean = false;
  listFilmCount!: number;
  
  themeService: ThemeService = inject(ThemeService);
  checkoutService: CheckoutService = inject(CheckoutService)



  constructor(public dialog: MatDialog) {}

  shopCartAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ShopppingCartComponent, dialogConfig);
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  collapsed = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidenavVisibility();
  }

  ngOnInit() {
    this.updateSidenavVisibility();

  }

  public updateSidenavVisibility() {
    if (typeof window !== 'undefined')
      if (window.innerWidth >= 768) {
        this.collapsed.set(false);
      } else {
        this.collapsed.set(true);
      }
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  toggleCount() {
    return (this.listFilmCount =
      this.checkoutService.listSelectedFilms.length);
  }
}
