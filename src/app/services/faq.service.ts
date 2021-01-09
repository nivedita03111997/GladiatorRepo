import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient:HttpClient) { }

  public getAllFAQ(){
    return this.httpClient.get("http://localhost:65456/api/FAQ");
  }
}