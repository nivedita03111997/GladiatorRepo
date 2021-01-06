import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { UserDetailsForAdminComponent } from './user-details-for-admin/user-details-for-admin.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminloginComponent,
    UserDetailsForAdminComponent,
    ActivateUserComponent,
    ProductlistComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
