import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminId:any;
  adminLogin:any;
  adminForm! : FormGroup;
  submitted = false;
  errMsg:any;
  constructor(private router:Router,private formBuilder:FormBuilder,private adminService:AdminService) { 

    this.adminLogin=new Admin();
  }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  get f() {return this.adminForm.controls; }

  adminCheck(){
    this.submitted = true;
    console.log("in adminCheck");
    console.log(this.adminLogin);
    this.adminService.adminLoginByApi(this.adminLogin).subscribe(
      c=>{ this.adminId=c;this.errMsg=undefined,console.log(this.adminId),
        (this.adminId!=null)? this.router.navigate(['userDetails/'+this.adminId]):{}
        },
      err=>{this.errMsg=err.error.Message}
     );
  }
}
