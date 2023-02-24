import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponce } from 'src/app/interface/login-responce';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
public loginform!: FormGroup;


constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private authservice:AuthService){}

login() {
  this.authservice
    .login(this.loginform.value.email, this.loginform.value.password)
    .subscribe((data) => {
      if (data) {
        sessionStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciI")
        this.router.navigate(['/UsermainComponent']); 
        alert("sucessfully login") // If valid and route to card
      }
      this.isSubmitted = true;
      this.isValidUser = data; // false show error message
    });
}

  close(){
           this.router.navigate(["login"])
  }


  get Email(): FormControl {
     return this.loginform.get("email")as FormControl;
   }

   get Password(): FormControl {
     return this.loginform.get("password")as FormControl;
   } 

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.maxLength(15),Validators.minLength(6)])


    })
  }
 
 }
