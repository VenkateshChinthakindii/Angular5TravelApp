import { Component,Inject } from '@angular/core';
import {  Router,ActivatedRoute} from '@angular/router';
//import {PackageService,Package}   from '../../service/package-list/package-service';
import{APP_SETUP} from '../config/injectable-token';
@Component({
  templateUrl:'./home.html'
})
export class HomeComponent {
  siteDisplayName=this.APPSETUP.siteDisplayName;
  
  constructor(@Inject(APP_SETUP) public APPSETUP,public router:Router,public activatedRoute:ActivatedRoute){
    // debugger;
    // this.router.navigate(['./user', ], { relativeTo: activatedRoute });
  }
 }