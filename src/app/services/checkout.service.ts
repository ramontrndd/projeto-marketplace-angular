import { SnackbarService } from './snackbar.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Film } from '../shared/film-model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private urlApi: string = 'https://films-api-v0tr.onrender.com';
  private _priceHandler!: number;
  public totalPrice: number = 0;
  public listFilms: Film[] = [];
  public listSelectedFilms: Film[] = [];
  private _filmhandler!: Film;
  constructor(private http: HttpClient, private snackbarService: SnackbarService) {}


  getListFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.urlApi + '/films');
  }

  getPrice(): number {
    return this._priceHandler;
  }
  setPrice(value: number) {
    this._priceHandler = value;
  }
  selectFilm() {
    setTimeout(() => {

      const selectedFilm = this.getFilm();
      const filmeExistente = this.listSelectedFilms.find(f => f.id === selectedFilm.id);
      if (!filmeExistente) {
        this.totalPrice += this.getPrice();
        this.listSelectedFilms.push(selectedFilm);
        this.snackbarService.showMessage('Filme adicionado ao carrinho', true)
      } else {
        this.snackbarService.showMessage('Este filme já foi adicionado ao carrinho', false)
      }

    }, 1);
  }
  unselectFilm(film: Film) {
    this.totalPrice -= this.getPrice();
    this.totalPrice -= film.price

    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    let index = this.listSelectedFilms.indexOf(this.getFilm());
    if (index > -1 || index === this.listSelectedFilms.indexOf(this.getFilm())
    ) {this.listSelectedFilms.splice(index, 1);
  }

  }
  getFilm() {
    return this._filmhandler;
  }

  setFilm(value: Film) {
    this._filmhandler = value;
  }

}
