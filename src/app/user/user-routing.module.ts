import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../common/guards/auth-guard.service';
import { PackagesListHomeComponent} from  './component/package-list/packages-list.component';
import { QuotationUserComponent} from  './component/quotation/quotation.user.component';

import { CanDeactivateGuard }     from '../common/guards/can-deactivate-guard.service';
import {PackageService}   from './service/package-list/package-service';
const userCenterRoutes: Routes = [
  { path:'Quotation', component: QuotationUserComponent},
  {path:'',component:PackagesListHomeComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(userCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PackageService
    //CrisisDetailResolver
  ]
})
export class UserCenterRoutingModule { }
