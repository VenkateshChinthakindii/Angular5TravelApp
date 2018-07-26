import{Component} from '@angular/core';
import{Master} from '../../../common/models/master';
import{MasterTypes} from '../../../common/enums/enumMaterTypes';
import{SnackBarUtility} from   '../../../common/utilities/snackbar';
import{AdminService} from '../../service/admin.service';
import {SpinnerAndDisable} from '../../../common/utilities/spinnerAndBtnDisable';
class localPlaceMaster extends Master{
    constructor(Name:string,MstTypeID:number,public isChecked:boolean=false){
        super(Name,MstTypeID);
    }
}
@Component({
    templateUrl:'./new-place.html',
    styles:[`
        body { 
            background: url(/assets/logo.png)
        }    
    `]
})
export class NewPlaceComponent{
    heroImageUrl = "../../assets/images/App-login-manager-icon.png";
    newPlacesList:localPlaceMaster[]=[]; 
    disableRemoverBtn:boolean=true;  
    constructor(private _snackBarUtility:SnackBarUtility,private _adminService:AdminService,
        public _spinnerAndDisable:SpinnerAndDisable){        
        this.addNewPlace();
    }   

    //CREATING MASTER(PLACE) INSTANCE AND RETURNING SAME INSTANCE
    getDefaultPlaceMaster():localPlaceMaster {
        return new localPlaceMaster('',MasterTypes.Place);
    }

    //PUSHING PLACE INSTANCE TO PLACELIST VARIABLE
    addNewPlace(){
        this.newPlacesList.push(this.getDefaultPlaceMaster())
    }

    //REMOVING PLACE INSTANCES FROM PLACELIST VARIABLE
    removePlace(){
        this.newPlacesList=this.newPlacesList.filter(pl=>pl.isChecked==false);
        this.disableRemoverBtn=true;
    }
    
    //ENABLING AND DISABLIG REMOVE PLACE BUTTON  ON CHECKBOX 
    checkboxChanged(){
        this.disableRemoverBtn=this.newPlacesList.filter(pl=>pl.isChecked).length<1?true:false;
    }
    btnDisable:[boolean]=[false];
    submitPlaces(isValid){       
        try{
            this._spinnerAndDisable.showSpinner(this.btnDisable);
            if(isValid){                
                this._adminService.submitNewPlace(this.newPlacesList.filter(pl=>pl.Name.length>0)).subscribe((data:any)=>{
                    this._spinnerAndDisable.hideSpinner(this.btnDisable);
                    this._snackBarUtility.openSnackBar(data);                    
                },error=>{
                    this._snackBarUtility.openSnackBar('Something went wrong please try again...');                    
                    this._spinnerAndDisable.hideSpinner(this.btnDisable);
                })
            }else{
                this._snackBarUtility.openSnackBar('Please provide all required details...');
                this._spinnerAndDisable.hideSpinner(this.btnDisable);
            }
        }
        catch(e){
            this._spinnerAndDisable.hideSpinner(this.btnDisable);
        }
    }
}