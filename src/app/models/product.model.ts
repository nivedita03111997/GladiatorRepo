export class Product{
    id:number;
    name:string;
    image:string;
    description:string;
    cost:number;
    processingfee:number;
     constructor(id:number=0, name:string='',image:string='',description:string='', cost:number=0, processingfee:number=0)
     {
            this.id=id;
            this.name=name;
            this.image=image;
            this.description=description;
            this.cost=cost;
            this.processingfee=processingfee;
     }
}