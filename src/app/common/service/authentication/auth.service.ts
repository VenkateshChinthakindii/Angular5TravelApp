import { Injectable,Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
//import{AppSetup} from './config/APPConfig'
@Injectable()
export class AuthService {
  isLoggedIn = (localStorage.getItem("IsLoggedIn")||'false')=='true';
  
  constructor(){
      
  }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {this.isLoggedIn = true;
      localStorage.setItem("IsLoggedIn",'true');
      //AppSetup.isloggedIn$.next(true);
     }
    );
      
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn",'false');
    //AppSetup.isloggedIn$.next(false);
  }
}
