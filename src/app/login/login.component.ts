import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerServiceService } from '../services/customer-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerId:any;
  customerlogin:any;
  loginForm!: FormGroup;
  submitted = false;
  errMsg?:any;
  constructor(private router:Router,private formBuilder:FormBuilder,private customerService:CustomerServiceService) {
    this.customerlogin=new Customer();
   }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  loginCheck(){
    this.submitted = true;
    this.customerService.loginCHeckFromApi(this.customerlogin).subscribe(
      c=>{ this.customerId=c;this.errMsg=undefined,
        (this.customerId!=null)? this.router.navigate(['dashboard'],this.customerId):{}
        },
      err=>{this.errMsg=err.error.Message}
     );
    
    
  }
}
