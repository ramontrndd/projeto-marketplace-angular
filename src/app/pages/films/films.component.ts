import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Film } from '../../shared/film-model';
import { CheckoutService } from './../../services/checkout.service';
import { environment } from '../../../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SelectbuttonComponent } from '../../dialog/selectbutton/selectbutton.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SelectbuttonComponent,
  ],
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

  selectFilm(film: Film): void {
    this.checkService.setPrice(film.price);
    this.checkService.setFilm(film);
  }
}
