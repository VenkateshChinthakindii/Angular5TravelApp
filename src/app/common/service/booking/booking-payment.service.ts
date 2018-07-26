import { Inject } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { WEBAPI,APP_SETUP } from '../../../config/injectable-token';
import{Package} from '../../../common/models/package-list';
import{Master} from '../../../common/models/master';

import { Injectable } from '@angular/core';

@Injectable()
export class BookingPaymentService {
    PackagesList:Package[] = [];
    masterList:Master[] = [];
    //private packages$: BehaviorSubject<Package[]> = new BehaviorSubject<Package[]>(PackagesList);
    //packageUrl:string='http://localhost:49341/api/package/GetAllActivePackages';    
    packagesListUrl=`${this.WEBAPI.apiRoot}/package/GetAllActivePackages`;  
    placesListUrl=`${this.WEBAPI.apiRoot}/master/GetAllActivePlaces`;  

    constructor(private _http:HttpClient,@Inject(WEBAPI) public WEBAPI,
    @Inject(APP_SETUP) public APPSETUP){     

    }    
    getPackagesList(){
        return this._http.get(this.packagesListUrl).map(
            (data)=>this.PackagesList=(<Package[]>data),
            error=>'No packages at this moment...'
        )
    }
    getPlacesList(){
        return this._http.get(this.placesListUrl).map(
            (data)=>this.masterList=(<Master[]>data),
            error=>'No packages at this moment...'
        )
    }
}
