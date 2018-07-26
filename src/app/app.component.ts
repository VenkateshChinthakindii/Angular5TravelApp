import { Component,OnInit} from '@angular/core';
//import{AuthService} from './auth.service';
//import{AppSetup} from './config/APPConfig';
//import { Observable } from 'rxjs/Observable';
//import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>     
  <ng4-loading-spinner [threshold]="0"  [loadingText]="" [zIndex]="9999"> </ng4-loading-spinner>
  `
})
export class AppComponent implements  OnInit{
   //isLoggedIn:boolean=true;
  constructor(){
   
    // if (this.router.url === '/login') {
    //     this.isLoggedIn = false
    //   }
    //   else{
    //     this.isLoggedIn =true
    //   }
  }
  public ngOnInit() {
   
    // AppSetup.isloggedIn$.subscribe(data=>{
    //   this.isLoggedIn=data;
    // });
  }
}
