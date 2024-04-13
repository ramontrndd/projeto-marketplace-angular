import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../shared/menuitem';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sideNavCollapsed = signal(true);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));

  menuItems = signal(<MenuItem[]>[
    {
      icon: 'home',
      label: 'inicio',
      route: 'home',
    },
    {
      icon: 'slideshow',
      label: 'Filmes',
      route: 'films',
    },
    {
      icon: 'account_circle',
      label: 'Sobre',
      route: 'about',
    },
  ]);
}
