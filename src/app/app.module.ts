import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { Pagenotfound401Component } from './components/pagenotfound401/pagenotfound401.component';
import { Pagenotfound404Component } from './components/pagenotfound404/pagenotfound404.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AuthService } from './services/auth.service';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BnNgIdleService } from 'bn-ng-idle';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsermainComponent } from './components/usermain/usermain.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { UserloginComponent } from './components/userlogin/userlogin.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListingComponent,
    Pagenotfound401Component,
    Pagenotfound404Component,
    EmployeeComponent,
    AdminloginComponent,
    DashboardComponent,
    SidebarComponent,
    UsermainComponent,
    HeaderComponent,
    UserloginComponent,

  ],

  exports: [
    
    ] ,

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
   
    
  ],

  providers: [ AuthService,AuthGuard,BnNgIdleService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
