import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from '../models/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient:HttpClient) {

   }
   public registerCustomerFromApi(customer:Customer){
     return this.httpClient.post("http://localhost:65456/api/customer/register",customer);
   }
}
