import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/iemployee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private employeeService:EmployeeserviceService) { }

  empId;
  header:boolean=false;
  employee:IEmployee;
  filteredEmployee:IEmployee;
  errorMessage:string;

  ngOnInit(): void {
    // this.empId = (this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
        console.log(this.empId);
      }
    );
    console.log(this.empId);
    if(this.empId){
      this.header=true;
      this.employeeService.getemp(this.empId).subscribe(
        employee => {
          this.employee = employee;
          this.filteredEmployee = this.employee;
        },
        error => this.errorMessage = <any>error
      );
    }else{
      this.header=false;
    }
    
  }

}
