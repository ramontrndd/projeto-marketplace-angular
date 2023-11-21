import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/ApiService';
import { Film } from './film.model';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden = false;

  constructor(
    private checkoutservice: CheckoutService,
    private route: Router,
    public apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.apiService.carregarFilms();
    this.checkoutservice.totalPrice = 0;
    this.checkoutservice.listSelectedFilms = [];
    this.checkoutservice.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });
  }
  toCheckout(): void {
    this.route.navigate(['../checkout']);
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  toggleCount() {
    return (this.listSelectedFilms =
      this.checkoutservice.listSelectedFilms.length);
  }
  
}
