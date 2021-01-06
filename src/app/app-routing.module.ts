import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registerCustomer',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'adminLogin',component:AdminloginComponent},
  {path:'productList',component:ProductlistComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
