import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { BnNgIdleService } from 'bn-ng-idle'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor( private bnIdle: BnNgIdleService,
               private router:Router) {
    this.employee = {
      firstname: '',
      lastname: '',
      birthday: '',
      gender: '',
      education: '',
      company: '',
      jobexperience: 0,
      salary: 0,
      profile: '',
    };
  }
  ngOnInit(): void {
    console.log(this.employee);

     //60 = 1 minute
     this.bnIdle.startWatching(3600).subscribe((res) => {
      if (res) {
        console.log('session expired');
        // this.router.navigateByUrl('logout');
        this.router.navigate(["login"])
      }
    });
    
  }

  deleteEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
  }

}
