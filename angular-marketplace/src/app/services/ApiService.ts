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
    try {
      const requisicao = await firstValueFrom(
        this.httpClient.get<any>(
          'https://api-films-ca70c46191e5.herokuapp.com/films/'
        )
      );

      this.listFilmsApi = requisicao.results;
    } catch (error) {
      console.error('Erro ao carregar os filmes:', error);
    }
  }
}
