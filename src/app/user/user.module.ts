import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {
  MatExpansionModule,
  MatListModule ,
  MatIconModule,
  MatCardModule,
  MatSelectModule,MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatChipsModule} from '@angular/material';
// import { CrisisService }        from './crisis.service';

import { PackagesListHomeComponent } from './component/package-list/packages-list.component';
import { QuotationUserComponent } from './component/quotation/quotation.user.component';
// import { CrisisListComponent }       from './crisis-list.component';
// import { CrisisCenterHomeComponent } from './crisis-center-home.component';
// import { CrisisDetailComponent }     from './crisis-detail.component';

// import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { UserCenterRoutingModule } from './user-routing.module';
import{CheckBoxStatusPipe} from '../common/pipes/checkBox.status.pipe';

import {QuotationModule} from '../common/component/quotation/quotation.module';
const modules = [
  MatExpansionModule,
  MatListModule,
  MatSelectModule,
  MatIconModule,
  MatChipsModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule  ,
  MatAutocompleteModule
]; 
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    modules,
    QuotationModule,
    UserCenterRoutingModule
    //CrisisCenterRoutingModule
  ],
  declarations: [
    PackagesListHomeComponent,
    QuotationUserComponent,
    CheckBoxStatusPipe
    //CrisisCenterComponent,
    // CrisisListComponent,
    // CrisisCenterHomeComponent,
    // CrisisDetailComponent
  ],
  providers: [
    //CrisisService
  ]
})
export class UserCenterModule {}
