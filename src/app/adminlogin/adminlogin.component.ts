import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminForm! : FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { 

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
  }
}
