import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
filteredEmployees:IEmployee[];
employeelist:IEmployee[] = [];
public employeelist2:IEmployee[] = [];
//  emp:IEmployee={""}
 errorMessage:string;
 e:IEmployee;
  // name;
  
     Employee = {
      Name:"",
      Email: "",
      DOB: "",
      DOJ: "",
      Salary: 0,
      Role: "",
      TotalLeave: ""
    }
 


  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
  }

}
