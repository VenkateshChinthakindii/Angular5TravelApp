import  {Component, Input} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BookingPaymentService} from '../../service/booking/booking-payment.service';
import {Quotation} from '../../../common/models/quotation';
import {Booking} from '../../../common/models/booking';
import{Participant} from '../../../common/models/participant';
import{Payment} from '../../../common/models/payment';
import{BookingVehicle} from '../../../common/models/booking.vehicle';

// import { timingSafeEqual } from 'crypto';

@Component({
    selector:'Quotation-Common',
    templateUrl:'./quotation.html'
})
export class QuotationComponent{
    @Input() IsQuotation:boolean=false;
    panelOpenState:boolean=false;
    bookingTypes=[{Id:1,Name:'Direct'},{Id:2,Name:'Agent'}];
    //CurrentDate:Date=new Date();
    //Email='';
    //ContactNumber=8096420195;
    //Noofdays='';
    //isChecked=false;
    packageSpecificPlaces:any[]=[];
    resources: any[] = [];      
    filteredResources: Observable<any[]>;
    resourceObj:IResources=null;
    static placeObj:Places=null;
    static packageObj:Packages=null;
    // totalAdults:number;
    // totalChildren:number;

    //toDayDate:Date=new Date();

    bookingModelObj:Booking=new Booking;
    quotationsList:any[]=[{ID:0,Name:'Az'},{ID:1,Name:'WAz'}];
    filteredQuotationsList:Observable<any[]>;
    bookingsList:any[]=[{ID:0,Name:'Az'}];
    filteredBookingsList:Observable<any[]>;

    vehiclesList:any[]=[];
    vechilcesObj:BookingVehicle[]=[new BookingVehicle()];
    // filteredvehiclesList:Observable<any[]>;
    // selectedVehicles:any[]=[];


    titleList:any[]=[{ID:1,Name:'Mr.'},{ID:2,Name:'Mrs.'},{ID:3,Name:'Ms.'},{ID:3,Name:'Miss.'}];
    countriesList:any[]=[{ID:1,Name:'Az'}];
    statesList:any[]=[{ID:1,Name:'Az'}];

    participantsList:Participant[]=[new Participant()];
    disableParticipantBtn:boolean=false;
    paymentObj:Payment=new Payment();

    constructor(public _bookingPaymentService:BookingPaymentService){
        debugger;
        this.filterQuotaion('');
        this.filterBooking('');
        this.checkboxChanged();
        QuotationComponent.placeObj=new Places(this._bookingPaymentService);
        this.resourceObj=this.createResourceObj(QuotationComponent.placeObj);
        QuotationComponent.placeObj.$resources.subscribe(resources=>{
            this.resources=resources;
            this.filterPlacePackage('');
        })
        
    }

    checkboxChanged(){
        this.disableParticipantBtn=this.participantsList.filter(x=>x.ChkChecked==true).length<=0;
    }
    addNewParticipant(){
        this.participantsList.push(new Participant());
    }
    removeParticipant(){
        this.participantsList=this.participantsList.filter(x=>x.ChkChecked==false);
        this.checkboxChanged();
    }


    selectedQuotation(Id){
        this.bookingModelObj.Quotation.ID=Id;
    }
    
    filterQuotaion(searchTxt){
        this.filteredQuotationsList= Observable.of(this.quotationsList.filter(quotation=>
            quotation.Name.toLowerCase().startsWith(searchTxt.toLowerCase()))||this.quotationsList);
    }
    selectedBooking(Id){
        this.bookingModelObj.ID=Id;
    }
    
    filterBooking(searchTxt){
        this.filteredBookingsList= Observable.of(this.bookingsList.filter(booking=>
            booking.Name.toLowerCase().startsWith(searchTxt.toLowerCase()))||this.bookingsList);
    }

    disableVechileBtn:boolean=true;
    addNewVehicle(){
            this.vechilcesObj.push(new BookingVehicle())
    }
    removeSelectedVehicle(vehicleIndex){
        this.vechilcesObj=this.vechilcesObj.filter(vehicle=>vehicle.IsChecked==false);
        this.changeVehicleObjs();
    }
    changeVehicleObjs(){
        this.disableVechileBtn=this.vechilcesObj.filter(vehicle=>vehicle.IsChecked==true).length<=0;
    }


      filterPlacePackage(searchValue){
        this.filteredResources =Observable.of(this.resourceObj.filterResources(this.resources,searchValue)); 
        //console.log(this.filteredResources)      
      }
    
      placePackageChanged(isCheckeds:any){
        this.packageSpecificPlaces=[];
        if(isCheckeds){
            if(QuotationComponent.packageObj==null){
                QuotationComponent.packageObj=new Packages(this._bookingPaymentService);                                 
            }
            this.resourceObj=this.createResourceObj(QuotationComponent.packageObj); 
            QuotationComponent.packageObj.$resources.subscribe(resources=>{
                this.resources=resources;
                this.filterPlacePackage('');
            })           
        }
        else{
            this.resourceObj=this.createResourceObj(QuotationComponent.placeObj);
            QuotationComponent.placeObj.$resources.subscribe(resources=>{
                this.resources=resources;
                this.filterPlacePackage('');
            })                 
        }   
           
      }

      placeSelectionChanged(isChecked:boolean,resourcePlace:any){
        if(isChecked){
            this.packageSpecificPlaces.push(resourcePlace);
        }
        else{
            this.removePlace(resourcePlace);
        }
      }
      movePlacesToPlacesPanel(resourceWithPlaces:any){
        if(resourceWithPlaces){
            this.packageSpecificPlaces=resourceWithPlaces.PackagePlaces;
        }
        else{
            this.packageSpecificPlaces=[];
        }
      }
      removePlace(placeResource){
        this.packageSpecificPlaces=this.resourceObj.removePlace(this.packageSpecificPlaces,placeResource);
      }
      createResourceObj(resource:IResources){ 
         return resource;
      }
     
}

export interface IResources{
    getAllResources();
    filterResources(source:any[],searchString:string);
    removePlace(packageSpecificPlaces:any[], placeResource:any);
}

export class Places implements  IResources{
    public resources: any[]=null;
    public $resources=new BehaviorSubject([]);
    constructor(public _bookingPaymentService:BookingPaymentService){
        this.getAllResources();
    }
    getAllResources(){
        if(!this.resources){
            this._bookingPaymentService.getPlacesList()
            .subscribe(data=>{
                this.resources=data.map((item:any) => {
                    return {
                        Id: item.Id,
                        Name: item.Name,
                        CheckStatus:false
                    }
                });
                this.$resources.next(this.resources);
            }) 
        }       
    }
    filterResources(prmResources:any[],name: string) {      
        return prmResources.filter(state =>
          state.Name.toLowerCase().startsWith(name.toLowerCase()))||this.resources;
    }
    removePlace(packageSpecificPlaces, placeResource){
        this.resources.filter(x=>x.Id==placeResource.Id)[0].CheckStatus=false;
        //alert(JSON.stringify(this.resources) )
        this.$resources.next(this.resources);
        return packageSpecificPlaces.filter(rs=>rs.Id!=placeResource.Id);
    }
}


export class Packages implements  IResources{
    public resources: any[]=null;
    public $resources=new BehaviorSubject([]);
    constructor(public _bookingPaymentService:BookingPaymentService){  
        this.getAllResources();     
    }
    getAllResources(){
        if(!this.resources){
            this._bookingPaymentService.getPackagesList()
            .subscribe(data=>{  
                let tempArray=[];
                data.forEach(element => {
                    tempArray=tempArray.concat(element);
                });
                data=tempArray;
                this.resources=data;
                this.$resources.next(this.resources);
            })
        }           
    }

    filterResources(prmResources:any[],name: string) { 
        let filteredResults:any[]=[];
        for (let group of prmResources) {
            let groupResources:any[]=group.filter(resource=>resource.code.toLowerCase().
            startsWith(name.toLowerCase()));
            if(groupResources.length>0)
                filteredResults.push(groupResources);
        } 
        //console.log(JSON.stringify(filteredResults))
        return filteredResults||prmResources;
    }
    removePlace(packageSpecificPlaces, placeResource){
        return packageSpecificPlaces.filter(rs=>rs.Id!=placeResource.Id);
    }
}
