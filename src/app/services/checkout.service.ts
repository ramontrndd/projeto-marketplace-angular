import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../shared/film-model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {

  private urlApi = environment.api;

  listFilms: Film[] = [];

  constructor(private http: HttpClient) {}

   getListFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.urlApi+'/films');
  }

}
