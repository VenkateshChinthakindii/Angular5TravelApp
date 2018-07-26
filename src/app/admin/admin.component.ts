import { Component } from '@angular/core';

@Component({
  template:  `    
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./place" routerLinkActive="active">Add Place</a>
      <a routerLink="./package" routerLinkActive="active">Add Package</a>
      <a routerLink="./PlaceMap" routerLinkActive="active">Package Place Map</a>
      <a routerLink="./Quotation" routerLinkActive="active">Quotation</a>
      <a routerLink="./Booking" routerLinkActive="active">Booking</a>
      <a routerLink="./Payment" routerLinkActive="active">Payment Map</a>
    </nav>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}
