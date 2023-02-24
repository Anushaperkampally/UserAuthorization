import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Pagenotfound401Component } from './components/pagenotfound401/pagenotfound401.component';
import { Pagenotfound404Component } from './components/pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeComponent } from './components/employee/employee.component';
import { AuthService } from './services/auth.service';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsermainComponent } from './components/usermain/usermain.component';
import { HeaderComponent } from './components/header/header/header.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';




const routes: Routes = [
  {path:"login",component:LoginComponent},

  {path:"UsermainComponent", component:UsermainComponent,canActivate:[AuthGuard]},
    {path:"sidebar", component:SidebarComponent,canActivate:[AuthGuard]},
    {path:"dashboard", component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"admin",component:AdminloginComponent,canActivate:[AuthGuard]},
    {path:"register",component:RegisterComponent,canActivate:[AuthGuard]},
    {path:"Userlogin",component:UserloginComponent,canActivate:[AuthGuard]}, 
    {path:"userlisting",component:UserListingComponent,canActivate:[AuthGuard]},
    {path:"employee",component:EmployeeComponent,canActivate:[AuthGuard]},
    {path:"HeaderComponent",component:HeaderComponent,canActivate:[AuthGuard]},
    
  

  {path: "",component:LoginComponent},
  {path: "**",component:Pagenotfound401Component},
// {path: "**",component:Pagenotfound404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
