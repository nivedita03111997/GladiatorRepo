
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customerId:any;
card:any;
customer:any;
  constructor(private router:Router,private active:ActivatedRoute,private customerService:CustomerServiceService) { 
    this.active.params.subscribe(param=>this.customerId=param["customerId"]);
    this.customerService.getCardByCustomerId(this.customerId).subscribe(c=>
      {this.card=c})
    this.customerService.getCustomerById(this.customerId).subscribe(d=>
      {this.customer=d})
  }

  ngOnInit(): void {
  }

}
