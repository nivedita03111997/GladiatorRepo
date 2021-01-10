import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmed.validator';
import { Customer } from '../models/customer.model';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
customer:any;
registerForm!: FormGroup;
submitted=false;
  constructor(private router:Router,private formBuilder:FormBuilder,private customerService:CustomerServiceService) { 
    this.customer=new Customer();
  }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      name:['',Validators.required],
      dob:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,
        Validators.pattern("^[6-9][0-9]{9}$")]],
      username:['',[Validators.required,
        Validators.pattern('^[a-z0-9A-Z]{3,6}$')]],
      password:['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]],
      confirmPassword:['',Validators.required],
      address:['',Validators.required],
      cardtype:['',Validators.required],
      banks:['',Validators.required],
      accountno:['',Validators.required],
      ifsc:['',Validators.required]
    },{
      validator:ConfirmedValidator('password','confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  onReset() {
    this.submitted=false;
    this.registerForm.reset();
}

  registerCustomer(){
    this.submitted=true;
    this.customer.status = "Deactivated";
    console.log(this.customer);
    this.customerService.registerCustomerFromApi(this.customer).subscribe(c=>{
      this.customer=c,
      (this.customer.Customer_Id==null)?{}:this.router.navigate(['login']);
    })
  }

}
