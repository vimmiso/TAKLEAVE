import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../models/iemployee';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
 
  // SaveFormData(formData: NgForm){
  //   const Employee = {
  //     Name: 'Name',
  //     Email: 'Email@gmail.com',
  //     DOB: '1-1-1996',
  //     DOJ: '1-1-2019',
  //     Salary: 400000,
  //     Role: 'employee',
  //     TotalLeave: '12'
  //     // Password: this.password
  //   };
  //   this.httpClient.post('http://localhost:5000/api/employee',Employee)
  //   .subscribe((response)=>{
  //     console.log(response);
  //   });

  //   formData.resetForm();
  // }

  
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
 

  // SaveFormData(formData: NgForm){
  //   const Employee = {
  //     Name: this.name,
  //     Email: this.email,
  //     DOB: '1-1-1996',
  //     DOJ: '1-1-2019',
  //     Salary: 400000,
  //     Role: 'employee',
  //     TotalLeave: '12'
  //     // Password: this.password
  //   };
  //   this.http.post('http://localhost:5000/api/employee',Employee)
  //   .subscribe((response)=>{
  //     console.log(response);
  //   });

  //   formData.resetForm();
  // }


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
