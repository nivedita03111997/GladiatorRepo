import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient:HttpClient) {

   }
   
   public registerCustomerFromApi(customer:Customer){
     return this.httpClient.post("http://localhost:65456/api/customer/register",customer);
   }
   public getCustomersFromApi(){
     return this.httpClient.get("http://localhost:65456/api/customer");
   }
   public loginCHeckFromApi(customer:Customer){​​

    return this.httpClient.post("http://localhost:65456/api/customer/Login",customer);
    debugger;

  }​​
}
