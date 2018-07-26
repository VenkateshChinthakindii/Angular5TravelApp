import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule}    from '@angular/forms';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import{NewPlaceComponent} from   './component/add-place/new-place.component';
import{NewPackageComponent} from   './component/add-package/new-package.component';
import{PackagePlaceMapComponent} from './component/package-place-map/package-place-map.component';

import{QuotationAdminComponent} from './component/quotation/quotation.component';
import{BookingAdminComponent} from './component/booking/booking.component';
import{PaymentComponent,DialogOverviewExampleDialog} from './component/payment/payment.component';
import{QuotationModule} from '../common/component/quotation/quotation.module'

import { AdminRoutingModule }       from './admin-routing.module';
import{AdminService} from './service/admin.service';
import {MatCardModule,MatIconModule,MatRadioModule,
  MatMenuModule,MatSnackBarModule,MatSelectModule,
  MatChipsModule,MatSlideToggleModule,MatStepperModule,
  MatAutocompleteModule,
  MatListModule,MatDatepickerModule,MatSortModule,MatTableModule,
  MatButtonModule,MatInputModule,MatCheckboxModule} from '@angular/material';
const modules = [
  MatCardModule ,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatListModule,
  MatDatepickerModule,MatSortModule,MatTableModule,
  
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    QuotationModule,
    modules
  ],
  entryComponents: [DialogOverviewExampleDialog],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    NewPlaceComponent,
    NewPackageComponent,
    PackagePlaceMapComponent,
    PaymentComponent,
    QuotationAdminComponent,
    BookingAdminComponent,
    DialogOverviewExampleDialog
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule {}
