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
Product:any;
  constructor(private productService:ProductService,private active:ActivatedRoute) { 
    this.active.params.subscribe(param=>this.productId=param["productId"]);
    this.productService.getProductById(this.productId).subscribe(p=>{
      this.Product=p,console.log(this.Product)
    })
  }

  ngOnInit(): void {
  }

}
