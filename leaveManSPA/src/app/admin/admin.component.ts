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

ch:boolean=true;  
filteredEmployees:IEmployee[];
employeelist:IEmployee[] = [];
public employeelist2:IEmployee[] = [];
employeelist3:IEmployee2[]=[];
 errorMessage:string;
 e:IEmployee;
  
     Employee = {
      Name:"",
      Email: "",
      DOB: "",
      DOJ: "",
      Salary: 0,
      Role: "",
      TotalLeave: ""
    }
 
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

   onSubmit(){
     this.ch=false;
   }

}
