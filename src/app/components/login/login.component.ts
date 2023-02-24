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
  public loginform!: FormGroup
  
  constructor(private authservice: AuthService ,private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
        this.loginform=this.formbuilder.group({
          email:new FormControl("",[Validators.required,Validators.email]),
          password:new FormControl("",[Validators.required,Validators.maxLength(15),Validators.minLength(6)])
                
      
        })
      } 
  
  login() {
    debugger;
    this.http.get<any>("http://localhost:3000/superadmin" && "http://localhost:3000/adminlogin").subscribe(res=>{
            const user =res.find((a:any)=>{
              return a.email === this.loginform.value.email && a.password === this.loginform.value.password
            });
      if (user != null) {
      
        console.log("user data", user);
        sessionStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciI")
        this.router.navigate(['/UsermainComponent']);
      }
      else {
        
        alert('plz enter validate username and password');
      }
    })
  
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

 
 
 }
