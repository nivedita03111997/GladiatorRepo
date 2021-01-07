import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
   
    public adminLoginByApi(admin:Admin) {
      return this.httpClient.post("http://localhost:65456/api/admin/login",admin);
    }

  
}
