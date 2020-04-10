import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../models/iemployee';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployee2, EmployeeResolved } from '../models/IEmployee2';

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
employeelist3:IEmployee2[]=[];
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


  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {


    this.route.data.subscribe(data => {
      const resolvedData: EmployeeResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onEmployeeRetrieved(resolvedData.eemployeelist);
    })


    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
  }

  onEmployeeRetrieved(emp:IEmployee2[]):void{
    this.employeelist3 = emp;
   }

}
