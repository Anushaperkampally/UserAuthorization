import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.scss']
})
export class UsermainComponent implements OnInit {

  constructor(private bnIdle: BnNgIdleService,
              private router:Router          
  ) { }

  ngOnInit(): void {

    // /60 = 1 minute
     this.bnIdle.startWatching(3600).subscribe((res) => {
      if (res) {
        console.log('session expired');
        // this.router.navigateByUrl('logout');
        this.router.navigate(["login"])
      }
    });

  }

}
