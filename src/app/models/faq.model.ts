export class FAQ{
    faqId:number;
    productId:number;
    questions:string;
    answers:string;

    constructor(faqId:number=0,productId:number=0,questions:string="",answers:string="")
    {
        this.faqId=faqId;
        this.productId=productId;
        this.questions=questions;
        this.answers=answers;
    }
}