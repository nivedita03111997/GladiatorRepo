import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserDetailsForAdminComponent } from './user-details-for-admin/user-details-for-admin.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductlistComponent } from './productlist/productlist.component';



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
    ProductlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
