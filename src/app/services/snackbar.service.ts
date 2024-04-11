import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'Fechar!', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['green-snackbar'] : ['black-snackbar'],
    });
  }
}
