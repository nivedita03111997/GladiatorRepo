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
customerId:any;
inputS!:string;
filteredList:any;
  constructor(private active:ActivatedRoute,private productService:ProductService) { 
    this.active.params.subscribe(param=>this.cardId=param["cardId"]);
    this.active.params.subscribe(param=>this.customerId=param["custId"]);
     this.productService.getProductList().subscribe(p=>{
       this.Products=p,console.log(this.Products)
       if(this.inputS==null){
        this.filteredList=this.Products;
      }
     })
     
  }

  ngOnInit(): void {
  }
  searchProducts(value:string,productList:any){
    if(value)
      this.filteredList = this.performFilter(productList, value);
    else
      this.filteredList=productList;
    
  }
  
    performFilter(list: any[], filterBy: string | null): any[] 
    {
       if(filterBy)       
      {
           filterBy = filterBy.toLocaleLowerCase();
           return list.filter((item) => Object.keys(item).some(prop => { 
             let value = item[prop];
              if (typeof value === "string")
              {
                value = value.toLocaleLowerCase();
              } 
              return value.toString().indexOf(filterBy) !== -1; 
          }) 
          ); 
      }
      return this.filteredList;
    }
}
