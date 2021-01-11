import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  constructor(private httpClient:HttpClient) { }

  public addEmiUsingApi(cardId:number,prodId:number,tenure:number){
     return this.httpClient.post("http://localhost:65456/api/emi?cardId="+cardId+"&prodId="+prodId+"&tenurePeriod="+tenure,null);
  }
  public getEmiByCustomerIdByAPI(custId:number){
    return this.httpClient.get("http://localhost:65456/api/emi/"+custId);
  }
}
