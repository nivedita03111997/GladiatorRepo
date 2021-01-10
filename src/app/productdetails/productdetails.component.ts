import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productId:any;
cardId:any;
Product:any;
emiperiod?:any;
emiPerMonth?:number;
  constructor(private productService:ProductService,private active:ActivatedRoute) { 
    this.active.params.subscribe(param=>this.cardId=param["cardId"]);
    this.active.params.subscribe(param=>this.productId=param["prodId"]);
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe(p=>{
      this.Product=p,console.log(this.Product),this.emiPerMonth=this.Product.Product_Cost/this.emiperiod;
    })
  }


  // setEmi(cost:number,period:string){
  //   this.emiValue= cost/Number(period);
  //   console.log(this.emiValue);
  // }

  ngOnInit(): void {
  }

}
