export class Card{
    Card_Id:number;
    Customer_Id:number;
    Card_Number:number;
    Valid_till:Date;
    Card_Type:string;
    Total_credit:number;
    Credit_Used:number;
    Card_cost:number;
    Status:string;
    constructor(Card_Id:number=0,Customer_Id:number=0,Card_Number:number=0,Valid_till:Date=new Date,Card_Type:string="",Total_credit:number=0,Credit_Used:number=0,Card_cost:number=0,Status:string=""){
        this.Card_Id = Card_Id;
        this.Customer_Id = Customer_Id;
        this.Card_Number = Card_Number;
        this.Valid_till = Valid_till;
        this.Card_Type = Card_Type;
        this.Total_credit = Total_credit;
        this.Credit_Used = Credit_Used;
        this.Card_cost = Card_cost;
        this.Status = Status;
    }
}