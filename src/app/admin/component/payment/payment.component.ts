import {Component,ViewChild,OnInit,Inject} from  '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Observable';
@Component({
    templateUrl:'./payment.html'
})
export class PaymentComponent implements OnInit{  

    animal: string;
    name: string;
  
  
    filteredResources: Observable<any[]>;
    bookingDate:Date=new Date();
    PaymentDateValue:Date=new Date();
    packageSpecificPlaces:any[]=[{Name:'Jaipur',ID:1}];
    AgreedAmount:Number=2002;
    displayedColumns = [ 'SNo','Paid', 'Receiver', 'PaidDate','RemainingAmount','NextPayment'];
    dataSource:any;
    disabled:boolean=false;
    
    @ViewChild(MatSort) sort: MatSort;
    ELEMENT_DATA: any[] = [
        {SNo:1,Paid:200,Receiver:'Bhageerathi1',PaidDate:this.PaymentDateValue,RemainingAmount:408,NextPayment:this.PaymentDateValue.setMonth(1)},
        {SNo:2,Paid:201,Receiver:'Bhageerathi2',PaidDate:this.PaymentDateValue,RemainingAmount:407,NextPayment:this.PaymentDateValue.setMonth(2)},
        {SNo:3,Paid:202,Receiver:'Bhageerathi3',PaidDate:this.PaymentDateValue,RemainingAmount:406,NextPayment:this.PaymentDateValue.setMonth(3)},
        {SNo:4,Paid:203,Receiver:'Bhageerathi4',PaidDate:this.PaymentDateValue,RemainingAmount:405,NextPayment:this.PaymentDateValue.setMonth(4)},
        {SNo:5,Paid:204,Receiver:'Bhageerathi5',PaidDate:this.PaymentDateValue,RemainingAmount:404,NextPayment:this.PaymentDateValue.setMonth(5)},
        {SNo:6,Paid:205,Receiver:'Bhageerathi6',PaidDate:this.PaymentDateValue,RemainingAmount:403,NextPayment:this.PaymentDateValue.setMonth(6)},
        {SNo:7,Paid:206,Receiver:'Bhageerathi7',PaidDate:this.PaymentDateValue,RemainingAmount:402,NextPayment:this.PaymentDateValue.setMonth(7)},
        {SNo:8,Paid:207,Receiver:'Bhageerathi8',PaidDate:this.PaymentDateValue,RemainingAmount:401,NextPayment:this.PaymentDateValue.setMonth(8)},
        {SNo:9,Paid:208,Receiver:'Bhageerathi9',PaidDate:this.PaymentDateValue,RemainingAmount:400,NextPayment:this.PaymentDateValue.setMonth(9)}
      ];
    
    constructor(public dialog: MatDialog){
       
       this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
       
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '500px',
          data: { name: this.name, animal: this.animal }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          alert('The dialog was closed');
          this.animal = result;
        });
    }
    ngAfterViewInit() {
       this.dataSource.sort = this.sort;
      }
    ngOnInit() {      
      
    }       
}

@Component({
    selector: 'dialog-overview-example-dialog',
    template: `<h1 mat-dialog-title>Payment</h1>
    <div mat-dialog-content>
      <table>
        <tr>
            <td>                        
                <mat-form-field class="example-full-width">
                    <input matInput type="text" class="form-control" 
                        placeholder="Amount" id="agreedAmount" name="agreedAmount" 
                        [(ngModel)]="AgreedAmount">
                </mat-form-field>
            </td>
            <td>                        
                <mat-form-field class="example-full-width">
                    <input matInput type="text" class="form-control" 
                    placeholder="Balance Amount" id="agreedAmount" name="agreedAmount" 
                    [(ngModel)]="AgreedAmount">
                </mat-form-field>
            </td>
        </tr>
        <tr>
            <td>
            <mat-form-field class="example-full-width">
                <input matInput [matDatepicker]="duePaymentDate" name="duePaymentDate"
                [(ngModel)]="PaymentDateValue" placeholder="Paid Date">
                <mat-datepicker-toggle matSuffix [for]="duePaymentDate">

                </mat-datepicker-toggle>
                <mat-datepicker touchUi="true" #duePaymentDate></mat-datepicker>
                </mat-form-field>
            </td>
            <td>
                <mat-form-field class="example-full-width">
                    <input matInput [matDatepicker]="duePaymentDate" name="duePaymentDate"
                    [(ngModel)]="PaymentDateValue" placeholder="Due Payable On Before">
                    <mat-datepicker-toggle matSuffix [for]="duePaymentDate">

                    </mat-datepicker-toggle>
                    <mat-datepicker touchUi="true" #duePaymentDate></mat-datepicker>
                </mat-form-field>
            </td>
        </tr>
      </table>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button  cdkFocusInitial>Ok</button>
    </div>
    `,
  })
  export class DialogOverviewExampleDialog {

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }