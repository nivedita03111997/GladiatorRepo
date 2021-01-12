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

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CustomerServiceService } from './services/customer-service.service';
import { AdminService } from './services/admin.service';
import { FaqComponent } from './faq/faq.component';
import { PaymentComponent } from './payment/payment.component';
import { EmiPaymentComponent } from './emi-payment/emi-payment.component';
import { TermsComponent } from './terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    UserDetailsForAdminComponent,
    ActivateUserComponent,
    DashboardComponent,
    LoginComponent,
    AdminloginComponent,
    UserDetailsForAdminComponent,
    ActivateUserComponent,
    ProductlistComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    HomeComponent,
    ProductdetailsComponent,
    FaqComponent,
    PaymentComponent,
    EmiPaymentComponent,
    TermsComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [CustomerServiceService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
