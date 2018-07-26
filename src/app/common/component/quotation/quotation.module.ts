import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// import { CrisisService }        from './crisis.service';

import { QuotationComponent } from './quotation.component';
// import { CrisisListComponent }       from './crisis-list.component';
// import { CrisisCenterHomeComponent } from './crisis-center-home.component';
// import { CrisisDetailComponent }     from './crisis-detail.component';

// import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { BookingPaymentService } from '../../service/booking/booking-payment.service';

import {
  MatExpansionModule,
  MatListModule ,
  MatIconModule,
  MatCardModule,
  MatSelectModule,MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,MatMenuModule,
  MatStepperModule,
  MatChipsModule} from '@angular/material';
const modules = [
  MatExpansionModule,
  MatListModule ,
  MatIconModule,
  MatCardModule,
  MatSelectModule,MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatChipsModule,MatStepperModule,
  MatMenuModule]; 
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    modules
  ],
  declarations: [
    QuotationComponent
  ],
  exports:[QuotationComponent, CommonModule, FormsModule],
  providers: [
    BookingPaymentService
  ]
})
export class QuotationModule {}
