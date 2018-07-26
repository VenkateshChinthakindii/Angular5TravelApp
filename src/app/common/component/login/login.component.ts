import { Component ,Inject}        from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService }      from '../../service/authentication/auth.service';
import{APP_SETUP} from '../../../config/injectable-token';
@Component({
  template: `   
  <div class="content-align"> 
  <h1 class="title">{{siteDisplayName}}</h1>
    <h3>User Login</h3>
    <form>
    <mat-form-field class="example-half-width">
       <input matInput placeholder="User Name">
    </mat-form-field>

    <br/>
    <mat-form-field class="example-half-width">
    <input matInput placeholder="Password">
    </mat-form-field>
    <p>   
      <button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
    </form>
    </div>
    `
})
export class LoginComponent {
  message: string;
  siteDisplayName=this.APPSETUP.siteDisplayName;
    // <p>{{message}}</p>
  constructor(public authService: AuthService,private route: ActivatedRoute, public router: Router,
    @Inject(APP_SETUP) public APPSETUP) {
    let isLogout:number;
    this.route.params.subscribe(params =>isLogout=params.id);
    if(!isNaN(isLogout)){
      this.logout();
    }
    else{
      this.router.navigate(['/home']);
    }
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/user';
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
