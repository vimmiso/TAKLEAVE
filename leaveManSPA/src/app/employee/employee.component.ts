import { EmployeeserviceService } from './../services/employeeservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployee } from '../models/iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

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

  empId;
  header:boolean=false;
  employee:IEmployee;
  filteredEmployee:IEmployee;
  // errorMessage:string;
  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );


    // this.empId = (+this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
        console.log(params.get('id'));
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
    // this.employeelist2 = this.employeelist;
    // for(var emp of this.employeelist2){
    //   // if(this.filteredEmployees[0].)
    //   console.log(emp.Name);
    //   // console.log(this.Employee.Email);
    //   // console.log(this.Employee.Email+"hello");
    

    //   if(this.Employee.Email===emp.Email){
    //     console.log("yes"+" "+emp.Email);
    //   }
    // }
  }

  onSubmit(){
    
    for(var emp of this.employeelist){
      // if(this.filteredEmployees[0].)
      console.log(emp["Email"]);
      // console.log(this.Employee.Email);
      // console.log(this.Employee.Email+"hello");
    

      if(this.Employee.Email===emp.Email){
        console.log("yes"+" "+emp.Email);
      }
    }
    console.log(this.employeelist.length);
    // console.log('in onSubmit:', form.valid);
    // this.router.navigateByUrl('/adminlogin').then(nav => {
    //   console.log(nav); // true if navigation is successful
    // }, err => {
    //   console.log(err) // when there's an error
    // });
  }

}
