export class MasterPackage {
    constructor(public id: number=0, public Code: string,
    public SubCatID: number,
    public Fare: number|null,
    public CreatedDate:Date=new Date(),
    public LastModifiedDate:Date=new Date(),
    public IsActive:boolean=true
) { }
}