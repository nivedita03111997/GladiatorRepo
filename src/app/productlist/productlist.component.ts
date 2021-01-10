import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
Products:any;
cardId:any;
prodId:any;
  constructor(private active:ActivatedRoute,private productService:ProductService) { 
    this.active.params.subscribe(param=>this.cardId=param["cardId"]);
     this.productService.getProductList().subscribe(p=>{
       this.Products=p,console.log(this.Products)
     })
  }

  ngOnInit(): void {
  }

}
