import { CustomerServiceService } from './../services/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-for-admin',
  templateUrl: './user-details-for-admin.component.html',
  styleUrls: ['./user-details-for-admin.component.css']
})
export class UserDetailsForAdminComponent implements OnInit {

  customers:any;
  constructor(private CustomerService:CustomerServiceService) { 
    this.CustomerService.getCustomersFromApi().subscribe(d=>{
      this.customers=d;
    })
  }

  getCustomers(){
    
  }

  ngOnInit(): void {
  }

}
