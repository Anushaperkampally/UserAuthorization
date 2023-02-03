import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { BnNgIdleService } from 'bn-ng-idle'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  constructor(private register:RegisterService,
              private bnIdle: BnNgIdleService,
              private router:Router) { }

  ngOnInit(): void {
 
    //60 = 1 minute
    this.bnIdle.startWatching(3600).subscribe((res) => {
      if (res) {
        console.log('session expired');
        // this.router.navigateByUrl('logout');
        this.router.navigate(["login"])
      }
    });

  }

  registerForm = new FormGroup({
    firstname: new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl("",[
      Validators.required,
      Validators.email]),
    mobile:new FormControl("",[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern("[0-9]*")]),
    gender: new FormControl("",[
      Validators.required]),
    pwd:new FormControl("",[
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(6),]),
    rpwd: new FormControl(""),
  });


  registersubmited(){
    if(this.Pwd.value == this.Rpwd.value){
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'
      alert("sucussfully submited!");
      console.log(this.registerForm)
      this.register.saveregister(this.registerForm.value).subscribe((result)=>{
        console.log(result)
      })
      
    }else{
      this.repeatPass = 'inline'
      alert("submission failed !");
    }

    
  }

  get FirstName(): FormControl {
  return this.registerForm.get("firstname")as FormControl;
  }
  get LastName(): FormControl {
  return this.registerForm.get("lastname")as FormControl;
  }
  get Email(): FormControl {
  return this.registerForm.get("email")as FormControl;
  }
  get Mobile(): FormControl {
  return this.registerForm.get("mobile")as FormControl;
  }
  get Gender(): FormControl {
  return this.registerForm.get("gender")as FormControl;
  }
  get Pwd(): FormControl {
  return this.registerForm.get("pwd")as FormControl;
  }
  get Rpwd(): FormControl {
    return this.registerForm.get("rpwd")as FormControl;
  }


}
