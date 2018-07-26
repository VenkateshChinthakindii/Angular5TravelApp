import { Inject ,Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { WEBAPI } from '../../config/injectable-token';
import {Master} from '../../common/models/master';
import {MasterPackage} from '../../common/models/master.package';

@Injectable()
export class AdminService {

    addNewPlace=`${this.WEBAPI.apiRoot}/master/AddNewPlace`;  
    addNewPackage=`${this.WEBAPI.apiRoot}/master/AddNewPackage`;  
    packagePlaceMapSubmit=`${this.WEBAPI.apiRoot}/master/MapPackagePlace`;  

    getAllPackageSubCategories=`${this.WEBAPI.apiRoot}/master/getAllPackageSubCategories`;  
    getAllPlaces=`${this.WEBAPI.apiRoot}/master/getAllPlaces`;  
    getAllPackages=`${this.WEBAPI.apiRoot}/master/getAllPackages`;  
    getPackagePlaces=`${this.WEBAPI.apiRoot}/master/getPackagePlaces`;  

    constructor(private _http:HttpClient,@Inject(WEBAPI) public WEBAPI){     

    }    
   
    //GET ALL SUB CATEGORIES OF PACKAGE LIKE NORTHINDIA ETC..
    getPackageSubCategories(){
        return this._http.get(this.getAllPackageSubCategories);
    }

    //GET ALL PLACES EVEN ISACTIVE IS FALSE
    getPlaces(){
        return this._http.get(this.getAllPlaces);
    }
    //GET ALL PACKAGES EVEN ISACTIVE IS FALSE
    getPackages(){
        return this._http.get(this.getAllPackages);
    }

    getPackageSpecificPlaces(packageId:number){
        return this._http.get(`${this.getPackagePlaces}/${packageId}`);
    }
     //PUSHING NEW PLACE(S) TO MASTER DATA IN DB
     submitNewPlace(lstPlaces:Master[]){
        return this._http.post(this.addNewPlace,lstPlaces).map(
            (data)=>{'Place(s) added successfully...'}
        ).do(null,error=>console.log(error.message))
    }
    
    //PUSHING NEW PACKAGE(S) TO MASTER DATA IN DB
    submitNewPackage(masterPackageList:MasterPackage[]){
        
        return this._http.post(this.addNewPackage,masterPackageList).map(
            (data)=>'Package(s) added successfully...'
        )
    }

    submitPackagePlaceMap(packagePlaceObj:any){
        debugger;
        return this._http.post(this.packagePlaceMapSubmit,packagePlaceObj).map(
            (data)=>'Places Mapped To Package successfully...'
        )
    }
}
