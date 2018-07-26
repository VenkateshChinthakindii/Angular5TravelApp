import{Component} from '@angular/core';

@Component({
    template:'<Quotation-Common  [IsQuotation]="IsQuotation"></Quotation-Common>'
})
export class BookingAdminComponent{ 
    IsQuotation:boolean=false;
    constructor()
    {
    }   
}