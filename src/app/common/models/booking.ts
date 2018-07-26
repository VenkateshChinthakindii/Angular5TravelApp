import {Quotation} from './quotation';

export class Booking
{
    public ID:number;
    public CreatedBy:number;
    public CreatedDate:Date=new Date();
    public ModifiedBy:number;
    public ModifiedDate:Date;
    public Quotation:Quotation;
    constructor(){    
        this.Quotation=new Quotation();
    }
}