import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../common/guards/auth-guard.service';
import { HomeComponent} from  './home.component';
import { CanDeactivateGuard }     from '../common/guards/can-deactivate-guard.service';

const userCenterRoutes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'user',
            loadChildren: 'app/user/user.module#UserCenterModule',
            canLoad: [AuthGuard]
          },
          {
            path: 'admin',    
            loadChildren: 'app/admin/admin.module#AdminModule',
            canLoad: [AuthGuard]
          }
        ]
      }
    ]    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //PackageService
    //CrisisDetailResolver
  ]
})
export class HomeCenterRoutingModule { }
