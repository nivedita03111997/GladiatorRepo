
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerServiceService } from '../services/customer-service.service';
import { EmiService } from '../services/emi.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customerId:any;
card:any;
customer:any;
emi:any;
tranList:any;
emiList:any;
currentDate!:Date;
  constructor(private emiService:EmiService,private router:Router,private active:ActivatedRoute,private customerService:CustomerServiceService,private transactionService:TransactionService) { 
    this.active.params.subscribe(param=>this.customerId=param["customerId"]);
    this.customerService.getCardByCustomerId(this.customerId).subscribe(c=>
      {this.card=c
      console.log(this.card)})
    this.customerService.getCustomerById(this.customerId).subscribe(d=>
      {this.customer=d
      console.log(this.customer)})
    this.transactionService.getTransactionByCustomerId(this.customerId).subscribe(t=>
      {this.tranList=t})
    this.emiService.getEmiByCustomerIdByAPI(this.customerId).subscribe(e=>
      {this.emiList=e})
      
  }

  ngOnInit(): void {
  }
  checkValidity(dueDate:Date)
  {
    this.currentDate=new Date();
    console.log(this.currentDate);
    // if(this.currentDate.getTime()>=dueDate.getTime())
    //   return true;
    // else
    //   return false;
  }
  Navigate(cardId:number,custId:number){
    this.router.navigate(['productList',cardId,custId]);
  }

}
