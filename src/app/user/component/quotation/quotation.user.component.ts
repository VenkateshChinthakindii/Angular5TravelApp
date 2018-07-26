import  {Component} from '@angular/core';
import{QuotationComponent} from '../../../common/component/quotation/quotation.component'
// import {Observable} from 'rxjs/Observable';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//import {BookingPaymentService} from '../../service/booking/booking-payment.service';

@Component({
    templateUrl:'./quotation.user.html'
})
export class QuotationUserComponent{
    IsQuotation:boolean=true;
}
