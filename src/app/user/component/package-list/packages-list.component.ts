import { Component } from '@angular/core';
import {PackageService}   from '../../service/package-list/package-service';
import{Package} from '../../../common/models/package-list'
@Component({
  templateUrl:'./package-list.html'
})
export class PackagesListHomeComponent {

  public packages=[];
  constructor(private _packageService:PackageService){
    //FETCH AVAILABLE PACKAGES LIST ALONG WITH FAIR AND PLACES
    this._packageService.getPackagesList().subscribe(
      data=>{
        this.packages=data;        
      },
      error=>console.log(error)
    );
  }
 }