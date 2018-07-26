import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../../guards/auth-guard.service';
import { AuthService }          from '../../service/authentication/auth.service';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
  { 
    path: 'login', component: LoginComponent     
  },
  {
    path:'login/:id',component:LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
