import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle'; 


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  public loginform!: FormGroup

  constructor(private formbuilder:FormBuilder,
              private http:HttpClient,
              private router:Router,
              private bnIdle: BnNgIdleService,) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:[''],
      password:['',Validators.required]
    })
   
      //60 = 1 minute
      this.bnIdle.startWatching(3600).subscribe((res) => {
        if (res) {
          console.log('session expired');
          // this.router.navigateByUrl('logout');
          this.router.navigate(["login"])
        }
      });


  }

  login(){
    this.http.get<any>("http://localhost:3000/superadmin").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email ===this.loginform.value.email && a.password === this.loginform.value.password
      });
      if(user){
        alert("Login successfully");
        this.loginform.reset()
        this.router.navigate(["userlisting"])
      }
      else{
        alert("user not found")
        this.router.navigate(["userlogin"])
      }
      (error:any)=>{
        alert("something went wrong")
      }
    })
  }

}
