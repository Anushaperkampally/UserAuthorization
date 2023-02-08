import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponce } from 'src/app/interface/login-responce';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent  {


public loginform:FormGroup = new FormGroup({
email:new FormControl(),
password:new FormControl(),

})
constructor(private loginservice:LoginService, private router:Router) {}

  login(){
    this.loginservice.getlogin(this.loginform.value).subscribe(
      (value:LoginResponce)=>{
        alert("login sucessfully")
        localStorage.setItem("token",value.token);
        this.router.navigateByUrl("/UsermainComponent")
      },
      (error:any)=>{
        console.log("error")
        alert("login failed invalid credaintels")
      }
    )
  }




}

















