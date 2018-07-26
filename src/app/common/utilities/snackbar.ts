import{Inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import{APP_SETUP} from '../../config/injectable-token';
@Injectable()
export class SnackBarUtility {
    constructor(public snackBar: MatSnackBar,@Inject(APP_SETUP) public AppSETUP ){ 

    }
    openSnackBar(message:string) {
        this.snackBar.open("", message, {
            duration: this.AppSETUP.snackbarDuration,
            verticalPosition:this.AppSETUP.snackbarVerticalPosition
          });
      }
}