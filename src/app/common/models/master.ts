export class Master {    
    constructor(
       public Name: string,        
       public MstTypeID: number,
       public id: number=0,
       public isActive: boolean=true,
       public CreatedDate: Date=new Date(),
       public LastModifiedDate: Date=new Date()) { }
}