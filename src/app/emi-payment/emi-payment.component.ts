import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-emi-payment',
  templateUrl: './emi-payment.component.html',
  styleUrls: ['./emi-payment.component.css']
})
export class EmiPaymentComponent implements OnInit {
emiId:any;
customerId:any;
productName:any;
emiPerMonth:any;
tran:any;
  constructor(private transactionService:TransactionService,private active:ActivatedRoute,private router:Router) {
    this.active.params.subscribe(param=>this.emiId=param["emiId"]);
    this.active.params.subscribe(param=>this.productName=param["prodName"]);
    this.active.params.subscribe(param=>this.emiPerMonth=param["emiPerMonth"]);
    this.active.params.subscribe(param=>this.customerId=param["custId"]);
   }

  ngOnInit(): void {
  }

  makePayment(){
    this.transactionService.addTransactionByAPI(this.emiId,this.productName,this.emiPerMonth).subscribe(t=>
      {this.tran=t})
    alert("Payment Successfull");
    this.router.navigate(['dashboard/'+this.customerId]);
  }
}
