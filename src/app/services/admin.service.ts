import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
   
    public adminLoginByApi(admin:Admin) {
      return this.httpClient.post("http://localhost:65456/api/admin/login",admin);
    }

    public adminActivatefromApi(id:number,customer:Customer){
      return this.httpClient.post("http://localhost:65456/api/card/"+id,customer);
    }

    public adminActivateCustomerFromApi(id:number,customer:Customer){
      return this.httpClient.put("http://localhost:65456/api/customer/"+id,customer)
    }
}
