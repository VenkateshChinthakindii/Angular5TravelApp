import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import{NewPlaceComponent} from   './component/add-place/new-place.component';
import{NewPackageComponent} from   './component/add-package/new-package.component';
import{PackagePlaceMapComponent} from './component/package-place-map/package-place-map.component';

import{QuotationAdminComponent} from './component/quotation/quotation.component';
import{BookingAdminComponent} from './component/booking/booking.component';

import{PaymentComponent} from './component/payment/payment.component';
import { AuthGuard }                from '../common/guards/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'place', component: NewPlaceComponent },
          { path: 'package', component: NewPackageComponent },
          { path: 'PlaceMap', component: PackagePlaceMapComponent },
          { path: 'Quotation', component: QuotationAdminComponent },
          { path: 'Booking', component: BookingAdminComponent },
          { path: 'Payment', component: PaymentComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
