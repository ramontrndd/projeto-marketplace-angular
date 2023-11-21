import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Film } from '../views/list-films/film.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  listFilmsApi: Film[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarFilms();
  }

  async carregarFilms() {
      const requisicao = await firstValueFrom(
        this.httpClient.get<any>(
          'https://films-api-v0tr.onrender.com/films'
        )
      );
      this.listFilmsApi = requisicao.results;
    } 
  }

