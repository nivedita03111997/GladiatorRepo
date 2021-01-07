
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customerId:any;
  constructor(private router:Router,private active:ActivatedRoute,private customerService:CustomerServiceService) { 
    // this.customerService.getCustomerById(this.customerId).subscribe(c=>
    //   {})
    //this.active.params.subscribe(param=>this.customerId=param[]);
  }

  ngOnInit(): void {
  }

}
