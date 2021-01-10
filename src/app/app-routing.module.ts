import { ActivateUserComponent } from './activate-user/activate-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserDetailsForAdminComponent } from './user-details-for-admin/user-details-for-admin.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registerCustomer',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'adminLogin',component:AdminloginComponent},
  {path:'productList/:cardId',component:ProductlistComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'userDetails/:adminId',component:UserDetailsForAdminComponent},
  {path:'activateUser',component:ActivateUserComponent},
  {path:'dashboard/:customerId',component:DashboardComponent},
  {path:'productList/:cardId/productDetails/:prodId',component:ProductdetailsComponent},
  {path:'faq',component:FaqComponent},
  {path:'productList/:cardId/productDetails/:prodId/payment/:emiPeriod',component:PaymentComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
