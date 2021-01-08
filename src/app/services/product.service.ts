import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  public getProductList(){
    return this.httpClient.get("http://localhost:65456/api/product");
  }

  public getProductById(id:number){
    return this.httpClient.get("http://localhost:65456/api/product/"+id);
  }
}
