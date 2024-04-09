import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Film } from '../../shared/film-model';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-selectbutton',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './selectbutton.component.html',
  styleUrl: './selectbutton.component.scss',
})
export class SelectbuttonComponent implements OnInit {
  disabled: boolean = false;

  constructor(
    private checkoutService: CheckoutService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  selectFilm(){
    this.disabled = true;
    this.checkoutService.selectFilm();
    this.snackbarService.openSnackbar('Filme adicionado ao carrinho','Fechar');
  }

  unselectFilm() {}
}
