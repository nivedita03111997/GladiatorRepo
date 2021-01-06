

export class Customer{
    id:number;
    name:string;
    dob:Date;
    email:string;
    phoneNo:string;
    username:string;
    password:string;
    address:string;
    cardType:string;
    selectBank:string;
    AccNo:string;
    ifsc:string;
    docs?:string;
    

    constructor(id:number=0,name:string="",dob:Date=new Date(),email:string="",phoneNo:string="",username:string="",password:string="",
            address:string="",cardType:string="",selectBank:string="",AccNo:string="",ifsc:string="",docs:string="")
    {
        this.id=id;
        this.name=name;
        this.dob=dob;
        this.email=email;
        this.phoneNo=phoneNo;
        this.username=username;
        this.password=password;
        this.address=address;
        this.cardType=cardType;
        this.selectBank=selectBank;
        this.AccNo=AccNo;
        this.ifsc=ifsc;
        this.docs=docs;
    }
    
}