import{Component} from '@angular/core';
import{QuotationComponent} from '../../../common/component/quotation/quotation.component'
@Component({
    template:'<Quotation-Common  [IsQuotation]="IsQuotation"></Quotation-Common>'
})
export class QuotationAdminComponent{
    IsQuotation:boolean=true;
    constructor()
    {
    }   
}