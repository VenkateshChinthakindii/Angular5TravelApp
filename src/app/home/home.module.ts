import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {
  MatExpansionModule} from '@angular/material';
// import { CrisisService }        from './crisis.service';

import { HomeComponent } from './home.component';
// import { CrisisListComponent }       from './crisis-list.component';
// import { CrisisCenterHomeComponent } from './crisis-center-home.component';
// import { CrisisDetailComponent }     from './crisis-detail.component';

// import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { HomeCenterRoutingModule } from './home-routing.module';
import { BookingPaymentService } from '../common/service/booking/booking-payment.service';

//import {QuotationComponent} from '../common/component/quotation/quotation.component'
const modules = [MatExpansionModule]; 
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    modules,
    HomeCenterRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    BookingPaymentService
  ]
})
export class HomeModule {}
