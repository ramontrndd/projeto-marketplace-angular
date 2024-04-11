import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CheckoutService } from '../../services/checkout.service';
import { Film } from './../../shared/film-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shoppping-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './shoppping-cart.component.html',
  styleUrl: './shoppping-cart.component.scss',
})
export class ShopppingCartComponent implements OnInit {
  listSelectedFilms: Film[] = [];

  checkoutService: CheckoutService = inject(CheckoutService);

  ngOnInit(): void {
    this.listSelectedFilms = this.checkoutService.listSelectedFilms;
  }
}
