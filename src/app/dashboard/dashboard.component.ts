
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
  constructor(private router:Router,private active:ActivatedRoute,private customerService:CustomerServiceService,private transactionService:TransactionService) { 
    this.active.params.subscribe(param=>this.customerId=param["customerId"]);
    this.customerService.getCardByCustomerId(this.customerId).subscribe(c=>
      {this.card=c
      console.log(this.card)})
    this.customerService.getCustomerById(this.customerId).subscribe(d=>
      {this.customer=d
      console.log(this.customer)})
    this.transactionService.getTransactionByCustomerId(this.customerId).subscribe(t=>
      {this.tranList=t})
  }

  ngOnInit(): void {
  }

  Navigate(cardId:number){
    this.router.navigate(['productList',cardId]);
  }

}
