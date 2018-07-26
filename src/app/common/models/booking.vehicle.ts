export class BookingVehicle{
    public ID:number;
    public IsActive:boolean=true;
    public VehicleID:number;
    public SeatingCapacity:number|null;
    public HiringCondition:string|null;    
    public QuotationID:number;
    public IsChecked:boolean=false;
}