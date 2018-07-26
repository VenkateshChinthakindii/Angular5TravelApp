import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent }    from './common/component/page-not-found/not-found.component';

import { CanDeactivateGuard }       from './common/guards/can-deactivate-guard.service';
import { AuthGuard }                from './common/guards/auth-guard.service';
import { SelectivePreloadingStrategy } from './common/guards/selective-preloading-strategy';

const appRoutes: Routes = [
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  // {
  //   path: 'home/admin',    
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canLoad: [AuthGuard]
  // },
  //  {
  //   path: 'home/user',
  //   loadChildren: 'app/user/user.module#UserCenterModule',
  //   data: { preload: true }
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
 
  { path: 'home',   
    loadChildren: 'app/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
