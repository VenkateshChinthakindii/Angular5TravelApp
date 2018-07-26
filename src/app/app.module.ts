import { NgModule,CUSTOM_ELEMENTS_SCHEMA  }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {APPConfigModule} from './config/appConfig.module';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
//import { ComposeMessageComponent } from './compose-message.component';
import { LoginRoutingModule }      from './common/component/login/login-routing.module';
import { LoginComponent }          from './common/component/login/login.component';
import { PageNotFoundComponent }   from './common/component/page-not-found/not-found.component';
//import { DialogService }           from './dialog.service';

import{EmailValidator} from './common/directives/validator/email.validator.directive';
import{SnackBarUtility} from   './common/utilities/snackbar';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {SpinnerAndDisable} from './common/utilities/spinnerAndBtnDisable';
// import{CheckBoxStatusPipe} from './common/pipes/checkBox.status.pipe';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatStepperModule,MatSortModule,MatTableModule
} from '@angular/material';
const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,MatIconModule,
  MatExpansionModule  ,
  MatCardModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatStepperModule,MatSortModule,MatTableModule
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APPConfigModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    modules ,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    EmailValidator,
    LoginComponent,
    PageNotFoundComponent
    //CheckBoxStatusPipe
  ],
  providers: [
    SnackBarUtility,
    SpinnerAndDisable
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {    
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
