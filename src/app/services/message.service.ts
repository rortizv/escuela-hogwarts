import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showMessage(message: string, action?: string) {
    this.snackBar.open(message, action || 'Aceptar', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }


  bottomMessage(message: string, action?: string) {
    this.snackBar.open(message, "", {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }
}