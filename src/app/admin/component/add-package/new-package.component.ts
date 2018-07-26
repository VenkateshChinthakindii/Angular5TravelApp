import{Component} from '@angular/core';
import{MasterPackage} from '../../../common/models/master.package';
import{MasterTypeSubCat} from '../../../common/enums/enumMaterTypes';
import{SnackBarUtility} from   '../../../common/utilities/snackbar';
import{AdminService} from '../../service/admin.service';
import {SpinnerAndDisable} from '../../../common/utilities/spinnerAndBtnDisable';

class localPackageMaster extends MasterPackage{
    constructor(id:number,Code:string,SubCatID:number,Fare:number,public isChecked:boolean=false){
        super(id,Code,SubCatID,Fare);
    }
}
@Component({
    templateUrl:'./new-package.html'
})
export class NewPackageComponent{
    newPackagesList:localPackageMaster[]=[]; 
    packageSubCategories:any[]=[];
    disableRemoverBtn:boolean=true;
    btnDisable:[boolean]=[false];
    constructor(private _snackBarUtility:SnackBarUtility,private _adminService:AdminService,
        public _spinnerAndDisable:SpinnerAndDisable){        
        this.getPackageSubCategories();
        this.addNewPackage();        
    }   

    //CREATING MASTER(PLACE) INSTANCE AND RETURNING SAME INSTANCE
    getDefaultPackageMaster():localPackageMaster {
        return new localPackageMaster(0,'',0,0,false);
    }

    //PUSHING PLACE INSTANCE TO PLACELIST VARIABLE
    addNewPackage(){
        this.newPackagesList.push(this.getDefaultPackageMaster())
    }

    //REMOVING PLACE INSTANCES FROM PLACELIST VARIABLE
    removePackage(){
        this.newPackagesList=this.newPackagesList.filter(pl=>pl.isChecked==false);
        this.disableRemoverBtn=true;
    }
    
    //ENABLING AND DISABLIG REMOVE PLACE BUTTON  ON CHECKBOX 
    checkboxChanged(){
        this.disableRemoverBtn=this.newPackagesList.filter(pl=>pl.isChecked).length<1?true:false;
    }

    //FETCHING ALL PACKAGE SUB CATEGORIES  MASTER DATA
    getPackageSubCategories(){
        this._adminService.getPackageSubCategories().subscribe((data:any)=>{
            this.packageSubCategories=data;
        },(error:any)=>{
            this.packageSubCategories=[];
        })
    }

    //SUBMITTING NEW PACKAGES TO DB TO INSERT INTO DB
    
    submitPackages(isValid){        
        try{
            this._spinnerAndDisable.showSpinner(this.btnDisable);
            debugger;
            if(isValid){
                this._adminService.submitNewPackage(this.newPackagesList.filter(pk=>pk.Code.length>0))
                .subscribe(data=>{
                    this._spinnerAndDisable.hideSpinner(this.btnDisable);
                    this._snackBarUtility.openSnackBar(data);
                },error=>{
                    this._spinnerAndDisable.hideSpinner(this.btnDisable);
                    this._snackBarUtility.openSnackBar('Something went wrong please try again...');                                        
                })
            }else{
                this._spinnerAndDisable.hideSpinner(this.btnDisable);
                this._snackBarUtility.openSnackBar('Please provide all required details...');
            }
        }
        catch(e){
            this._spinnerAndDisable.hideSpinner(this.btnDisable);
        }
    }
}