import{Customer} from './customer';
import{BookingVehicle} from './booking.vehicle';
export class Quotation{
    public ID:number;
    public TourStartDate:Date|null;
    public TourEndDate:Date|null;
    public NoOfDays:number|null;
    // public SeatingCapacity:number|null;
    // public HiringCondition:string|null;
    public NoOfSeats:number|null;
    public Adults:number|null;
    public Children:number|null;
    public Transporation:string|null;
    public Food:string|null;
    public Accomodation:string|null;
    public IsAnySpecialConditions:boolean|null;
    public SpecialConditions:string|null;
    // public IsPerSeat:boolean|null;
    public BookingTypeID:number|null;
    //public VehicalTypeID:number|null;
    public CreatedBy:number|null;  
    public CreatedDate:Date=new Date(); 
    //public CustomerID:number;
    public Customer:Customer;
    public BookingVehicle:BookingVehicle[]=[];
    constructor(){
        this.Customer=new Customer();
    }
}