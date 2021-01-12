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
shortLink: string = ""; 
loading: boolean = false; 
file: any;
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
      address:['',[Validators.required,Validators.minLength(40)]],
      cardtype:['',Validators.required],
      banks:['',Validators.required],
      accountno:['',[Validators.required,Validators.minLength(12),
        Validators.pattern('^\d{9,18}$')]],
      ifsc:['',[Validators.required,
        Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]]
    },{
      validator:ConfirmedValidator('password','confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  onReset() {
    this.submitted=false;
    
}

  registerCustomer(){
    this.submitted=true;
    this.customer.status = "Deactivated";
    console.log(this.customer);
    this.customerService.registerCustomerFromApi(this.customer).subscribe(c=>{
      this.customer=c,
      (this.customer.Customer_Id==null)?{}:alert("Registered successfully"),this.router.navigate(['login']);
    })
  }

  onChange(event:any) 
  { 
    this.file = event.target.files[0]; 
} 
 
// OnClick of button Upload 
onUpload() { 
    this.loading = !this.loading; 
    // console.log(this.file); 
    // this.fileUploadService.upload(this.file).subscribe( 
    //     (event: any) => { 
    //         if (typeof (event) === 'object') { 
 
    //             // Short link via api response 
    //             this.shortLink = event.link; 
 
    //             this.loading = false; // Flag variable  
    //         }   
    //     } 
    // ); 
}

}
