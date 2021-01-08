import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
Products:any;
  constructor(private productService:ProductService) { 
     this.productService.getProductList().subscribe(p=>{
       this.Products=p,console.log(this.Products)
     })
  }

  ngOnInit(): void {
  }

}
