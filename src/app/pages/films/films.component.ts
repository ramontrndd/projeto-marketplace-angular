import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Film } from '../../shared/film-model';
import { CheckoutService } from './../../services/checkout.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit {
  listFilms: Film[] = [];

  urlApi = environment.api;

  constructor(private checkService: CheckoutService) {}

  ngOnInit(): void {
    this.checkService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });
  }
}
