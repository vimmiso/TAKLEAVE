import { EmployeeleaveserviceService } from './../../services/employeeleaveservice.service';
import { Iemployeeleave } from './../../models/iemployeeleave';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  filteredEmployees: IEmployee[];
  employeelist: IEmployee[] = [];
  filteredEmployeeLeaves: Iemployeeleave[];
  employeeLeavelist: Iemployeeleave[] = [];
  errorMessage: string;
  empId;
  header: boolean = false;
  employee: IEmployee;
  e: Iemployeeleave={
    id:0,
    employeeId:0,
    leaveId:0,
    startDate:"",
    endDate:"",
    status:"Pending",
    leaveType:"",
    noofDays:0
  };
  filteredEmployee: IEmployee;
  action1: string = this.e.status;
  action2: string = this.e.status;
  action3: string = this.e.status;
 
  action: string = "Select Action";
  //  errorMessage:string;



  constructor(private http: HttpClient, private employeeService: EmployeeserviceService, private employeeLeaveService: EmployeeleaveserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );

    this.employeeLeaveService.getemployeeleavemaps().subscribe(
      employeeLeaves => {
        this.employeeLeavelist = employeeLeaves;
        this.filteredEmployeeLeaves = this.employeeLeavelist;
      },
      error => this.errorMessage = <any>error
    );


    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
        console.log(this.empId);
      }
    );
    console.log(this.empId);
    if (this.empId) {
      this.header = true;
      this.employeeService.getemp(this.empId).subscribe(
        employee => {
          console.log(employee);
          this.employee = employee;
          this.filteredEmployee = this.employee;
        },
        error => this.errorMessage = <any>error
      );
    } else {
      this.header = false;
    }

  }

  decision(emp:Iemployeeleave,de:string){
    // this.action=de;

    emp.status=de;
    this.e=emp;
    this.employeeLeaveService.updateLeaveDecision(emp).subscribe(
      error => this.errorMessage = <any>error
    )
    console.log(emp);
  }

}
