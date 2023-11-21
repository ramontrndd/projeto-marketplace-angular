import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Film } from 'src/app/views/list-films/film.model';


@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css'],
})
export class CardFilmComponent implements OnInit {
  listFilmsApi: Film[] = [];

  constructor(
    private checkoutService: CheckoutService,
    public apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
    this.listFilmsApi = film;
    });
    this.apiService.carregarFilms();
  }
  selectFilm(film: Film): void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price);
  }
}
