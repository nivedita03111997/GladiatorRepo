import { CustomerServiceService } from './../services/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-for-admin',
  templateUrl: './user-details-for-admin.component.html',
  styleUrls: ['./user-details-for-admin.component.css']
})
export class UserDetailsForAdminComponent implements OnInit {
  adminid:any;
  customers:any;
  card:any;
  status :any;
  constructor(private router:Router,private CustomerService:CustomerServiceService,private adminService:AdminService,private active:ActivatedRoute) { 
    this.active.params.subscribe(param => this.adminid = param["adminId"]);
    this.CustomerService.getCustomersFromApi().subscribe(d=>{
      this.customers=d;
    })
  }

  statusUpdate(id:number=this.adminid,customer:Customer){
      this.adminService.adminActivatefromApi(id,customer).subscribe(c=>{
        this.card = c;
      })
      location.reload();
      
    }
     
      
  
  ngOnInit(): void {
  }
  

}
