export class Payment{
    public ID:number=0;
    public AgreedAmount:Number;
    public TotalAmount:Number;
    public AdvanceAmount:Number;
    public BalanceAmount:Number;
    public CreatedDate:Date;
    public ModifiedDate:Date;
    public PayableOnBefore:Date;
    public BookingID:number;
    public CreatedBy:number;
    public ModifiedBy:number;

    public IsPerSeat:boolean|null;
    public PerSeat:Number|null;
    public IsLumpsum:boolean|null;
    public Lumpsum:Number|null;
    public ServiceTaxPer:Number=0;
    constructor(){

    }
}