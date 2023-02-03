import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BnNgIdleService } from 'bn-ng-idle';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {

  public loginform!: FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router, private cookie:CookieService, private bnIdle:BnNgIdleService ){}

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
    this.http.get<any>("http://localhost:3000/adminlogin").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.email ===this.loginform.value.email && a.password === this.loginform.value.password
      });
      if(user){
        this.cookie.set("userid","1");
        alert("user with id (" + this.cookie.get("userid") + ") success");
        this.loginform.reset()
        this.router.navigate(["register"])
      }
      else{
        alert("user not found")
        this.router.navigate(["login"])
      }
      (error:any)=>{
        alert("something went wrong")
      }
    })
  }
 
   
}
