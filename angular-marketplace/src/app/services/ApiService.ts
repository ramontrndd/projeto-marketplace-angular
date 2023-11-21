import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
    this.carregarFilms();
  }
  async carregarFilms() {
    try {
      const requisicao = await firstValueFrom(
        this.httpClient.get(
          'https://api-films-ca70c46191e5.herokuapp.com/films'
        )
      );
      console.log(requisicao);
    } catch (error) {
      console.error('Erro ao carregar os filmes:', error);
    }
  }
}
