import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
productId:any;
cardId:any;
customerId:any;
tenurePeriod:any;
emi:any;
amt:any;
product:any;
  constructor(private active:ActivatedRoute,private emiService:EmiService,private router:Router) {
    this.active.params.subscribe(param=>this.productId=param["prodId"]);
    this.active.params.subscribe(param=>this.cardId=param["cardId"]);
    this.active.params.subscribe(param=>this.tenurePeriod=param["emiPeriod"]);
    this.active.params.subscribe(param=>this.customerId=param["custId"]);
    console.log(this.customerId);
    
   }

  ngOnInit(): void {
  }
  makePayment(){
    this.emiService.addEmiUsingApi(this.cardId,this.productId,this.tenurePeriod).subscribe(
      e=>{this.emi=e,console.log(this.emi)}
    )
    alert("Payment Successfull");
    this.router.navigate(['dashboard/'+this.customerId]);
  }

}
