import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {
    const url = 'https://api-films-ca70c46191e5.herokuapp.com/films/'
    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // ou response.text() se os dados não forem JSON
  })
  .then(data => {
    console.log('Dados recebidos:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
  }
}
