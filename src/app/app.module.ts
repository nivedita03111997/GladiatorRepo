import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
=======
import { UserDetailsForAdminComponent } from './user-details-for-admin/user-details-for-admin.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
>>>>>>> 15c584050e60099ac1e9cdc88d0fe3f977a28519

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    AdminloginComponent
=======
    UserDetailsForAdminComponent,
    ActivateUserComponent
>>>>>>> 15c584050e60099ac1e9cdc88d0fe3f977a28519
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
