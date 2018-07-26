export class Participant{
    public ID:number;
    public ChkChecked:boolean=false;
    public FirstName :string;
    public LastName :string;
    public Age :number|null;
    public Gender :string;
    public SeatNo :number|null;
    public ContactNo1:string;
    public ContactNo2:string;    
    public Address :string;
    public AddressLine2 :string;
    public IsActive :boolean;
    public Country:number;
    public State:number;
    public City:string;
    public PostalCode:string;
    public QuoatationID:number;
    constructor(){

    }
}