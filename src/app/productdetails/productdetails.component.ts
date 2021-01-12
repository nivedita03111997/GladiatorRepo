import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})



export class ProductdetailsComponent implements OnInit {
productId:any;
cardId:any;
customerId:any;
card:any;
cardLimit:any;
Product:any;
productCost:any;
emiperiod?:any;
emiPerMonth?:number;
  constructor(private router:Router,private customerService:CustomerServiceService,private productService:ProductService,private active:ActivatedRoute) { 
    this.active.params.subscribe(param=>this.cardId=param["cardId"]);
    this.active.params.subscribe(param=>this.productId=param["prodId"]);
    this.active.params.subscribe(param=>this.customerId=param["custId"]);
    this.active.params.subscribe(param=>this.productCost=param["prodCost"]);
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe(p=>{
      this.Product=p,console.log(this.Product),this.emiPerMonth=this.Product.Product_Cost/this.emiperiod;
    })
  }

  checkBalance(){
    this.customerService.getCardByCustomerId(this.customerId).subscribe(c=>
      {this.card=c
        if(this.productCost>this.card.Total_credit)
        {
          alert("Sorry! You do not have enough balance to buy this product.")
          this.router.navigate(['productList',this.cardId,this.customerId]);
        }
        else
        {
          this.router.navigate(['payment/',this.cardId,this.productId,this.customerId,this.emiperiod]);
        }
      })
  }

  // setEmi(cost:number,period:string){
  //   this.emiValue= cost/Number(period);
  //   console.log(this.emiValue);
  // }

  ngOnInit(): void {
  }

}
