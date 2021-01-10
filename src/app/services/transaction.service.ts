import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  public addTransactionByAPI(emiId:number,prodName:string,amt:number){
    return this.httpClient.post("http://localhost:65456/api/transaction?id="+emiId+"&prodName="+prodName+"&amt="+amt,null);
  }

  public getTransactionByCustomerId(custId:number){
    return this.httpClient.get("http://localhost:65456/api/transaction/"+custId)
  }
}
