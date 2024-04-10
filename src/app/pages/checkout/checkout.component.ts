import { SnackbarService } from './../../services/snackbar.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


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
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  listSelectedFilms: Film[] = [];
  totalPrice: number = 0;
  disabled: boolean = false;
  hide: boolean = true;
  form: any;

  constructor(private checkoutservice: CheckoutService, private route: Router, private snackbarService: SnackbarService) {}
  ngOnInit(): void {
    this.totalPrice = this.checkoutservice.totalPrice;
    this.listSelectedFilms = this.checkoutservice.listSelectedFilms;
    this.toggleButton();
  }

  toggleButton() {
    if (this.listSelectedFilms.length == 0) {
      this.disabled = true;
    }
  }
  unselectFilm(film: Film): void {
    this.totalPrice -= film.price;
    this.checkoutservice.setFilm(film);
    this.checkoutservice.unselectFilm();
    if(this.checkoutservice.listSelectedFilms.length == 0){
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  payment(): void {
    this.snackbarService.openSnackbar('Pagamento efetuado', '')
    this.route.navigate(['/'])
    
  }
  cancel ( ): void{
    this.route.navigate(['/films'])
  }
}
