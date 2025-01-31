import { SnackbarService } from './../../services/snackbar.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { CheckoutService } from '../../services/checkout.service';
import { Film } from '../../shared/film-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  listSelectedFilms: Film[] = [];
  totalPrice!: number;
  disabled: boolean = false;
  hide: boolean = true;
  form: any;
  client: any = {};

  constructor(
    private checkoutservice: CheckoutService,
    private route: Router,
    private snackbarService: SnackbarService
  ) {}
  ngOnInit(): void {
    this.totalPrice = this.checkoutservice.totalPrice;
    this.listSelectedFilms = this.checkoutservice.listSelectedFilms;
    this.toggleButton();
  }

  toggleButton() {
    if (
      this.listSelectedFilms.length == 0 ||
      this.checkoutservice.listSelectedFilms.length == 0
    ) {
      this.disabled = true;
    }
  }
  recalculateTotalPrice(): void {
    this.checkoutservice.totalPrice =
      this.checkoutservice.listSelectedFilms.reduce(
        (total, film) => total + film.price,
        0
      );
  }
  exclude(film: Film): void {
    this.totalPrice -= film.price;
    this.checkoutservice.setFilm(film);
    this.checkoutservice.unselectFilm(film);
    this.recalculateTotalPrice();
    if (this.totalPrice <= 0) {
      this.excludeAll();
    }
  }

  excludeAll() {
    this.checkoutservice.totalPrice = 0;
    this.totalPrice = 0;
    this.checkoutservice.listSelectedFilms = [];
    this.listSelectedFilms = [];
    this.toggleButton();
  }
  cancel(): void {
    this.route.navigate(['/films']);
  }
  payment(): void {
    if (
      this.client.adress === undefined ||
      this.client.name === undefined ||
      this.client.password === undefined
    ) {
      this.snackbarService.showMessage(
        'Por favor insira dados válidos!',
        false
      );
    } else {
      this.snackbarService.showMessage(
        `'Pagamento realizado com sucesso! Pedido confirmado:' ${this.client.adress} Para: ${this.client.name}`,
        true
      );
      this.route.navigate(['/']);
      this.checkoutservice.listSelectedFilms = [];
    }
  }
}
