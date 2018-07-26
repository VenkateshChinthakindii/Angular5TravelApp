import {Component,OnInit} from  '@angular/core';
import {AdminService} from '../../service/admin.service';
import {SnackBarUtility} from '../../../common/utilities/snackbar';
import {SpinnerAndDisable} from '../../../common/utilities/spinnerAndBtnDisable';

@Component({
    templateUrl:'./package-place-map.html'
})
export class PackagePlaceMapComponent implements OnInit{
    packages:any=[];
    btnDisable:[boolean]=[false];
    packageID:number;
    allPlaces :{Id:number, Name: string,IsActive:boolean }[]= [];
    packageSpecificPlaces:{Id:number, Name: string ,IsActive:boolean}[]=[];

    constructor(private _adminService:AdminService,private _snackBarUtility:SnackBarUtility
     ,private _spinnerAndDisable:SpinnerAndDisable ){

    }
    ngOnInit() {
      
      this.getAllPackages();
      this.getAllPlaces();
      
    }
    toggleActive(packageSpecificPlace){
      packageSpecificPlace.IsActive=!packageSpecificPlace.IsActive;
    }
    getAllPackages(){
      this._adminService.getPackages().subscribe(pl=>{
        this.packages=pl;
      },error=>{
        this.packages=[];
        console.log(error.message);
      });
    }

    //RETRIEVING ALL PLACES EVEN NON ACTIVE PLACE
    getAllPlaces(){
      this._adminService.getPlaces().subscribe(pl=>{
        this.allPlaces=<{Id:number, Name: string ,IsActive:boolean}[]>pl;
      },error=>{
        this.allPlaces=[];
        console.log(error.message);
      });
    }

    getPackageSpecificPlaces(){
      try{       
          this._spinnerAndDisable.showSpinner(this.btnDisable);
          this.allPlaces=this.allPlaces.concat(this.packageSpecificPlaces);
          this.packageSpecificPlaces=[];
          if(this.packageID>0){
            this._adminService.getPackageSpecificPlaces(this.packageID).subscribe((pl:any)=>{
              this._spinnerAndDisable.hideSpinner(this.btnDisable);
              let responseSpecificPlaceIds=pl.map(pid=>pid.Id)||[];
              this.packageSpecificPlaces=this.allPlaces.filter(x=>responseSpecificPlaceIds.indexOf(x.Id)>-1);
              this.packageSpecificPlaces.forEach(pkpl => {
                pkpl.IsActive=pl.filter(plid=>plid.Id==pkpl.Id)[0].IsActive;            
              });
              this.allPlaces=this.allPlaces.filter(x=>responseSpecificPlaceIds.indexOf(x.Id)<=-1);
            },error=>{
              this._spinnerAndDisable.hideSpinner(this.btnDisable);
              console.log(error.message);              
            });
          }
      }
      catch(e){
        this._spinnerAndDisable.hideSpinner(this.btnDisable);
      }      
    }
    moveRight(place: any): void {
      let index = this.allPlaces.indexOf(place);
      if (index >= 0) {
        this.allPlaces.splice(index, 1);
        this.packageSpecificPlaces.push(place);
      }
    }
    moveLeft(place: any){
      let index = this.packageSpecificPlaces.indexOf(place);
      if (index >= 0) {
        this.packageSpecificPlaces.splice(index, 1);
        place.IsActive=true;
        this.allPlaces.push(place);
      }
    }
    keyPressNotAllowed(event){
      event.preventDefault();
    }

    //SUBMIT NEW PACKAGE ALONG WITH SPECIFIC PLACES OF PACKAGE
    submitPackagePlaceMap(isValid){
      try{
          if(isValid&&this.packageSpecificPlaces.length>0){
            this._spinnerAndDisable.showSpinner(this.btnDisable);
            this._adminService.
            submitPackagePlaceMap({PackageID:this.packageID,Places:this.packageSpecificPlaces}).subscribe(
              res=>{
                this._spinnerAndDisable.hideSpinner(this.btnDisable);
                this._snackBarUtility.openSnackBar(res);
              },error=>{
                this._spinnerAndDisable.hideSpinner(this.btnDisable);
                console.log(error.message);
                this._snackBarUtility.openSnackBar('Something went wrong please try again...');
              }
            )
          }
          else if(this.packageSpecificPlaces.length<=0)      {
            this._snackBarUtility.openSnackBar('Atleast One Place Is Required...');
          }
      }
      catch(e){
        this._spinnerAndDisable.hideSpinner(this.btnDisable);
      }      
    }      
}