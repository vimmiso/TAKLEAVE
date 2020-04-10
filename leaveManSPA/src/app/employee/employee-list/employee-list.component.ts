import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { IEmployee } from 'src/app/models/iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  filteredEmployees:IEmployee[];
 employeelist:IEmployee[] = [];
 errorMessage:string;
  
 
 constructor(private http:HttpClient,private employeeService:EmployeeserviceService) { }

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
