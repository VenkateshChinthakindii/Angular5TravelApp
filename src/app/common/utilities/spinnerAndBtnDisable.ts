import{Inject, Injectable} from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Injectable()
export class SpinnerAndDisable{
    constructor(private spinnerService: Ng4LoadingSpinnerService){

    }
    showSpinner(btnDisable=[false]){
        btnDisable[0]=true;
        setTimeout(() => {
          btnDisable[0]=false;    
        }, 5000);
        this.spinnerService.show();
    }

    hideSpinner(btnDisable=[false]){
        btnDisable[0]=false; 
        this.spinnerService.hide();
    }
    
}