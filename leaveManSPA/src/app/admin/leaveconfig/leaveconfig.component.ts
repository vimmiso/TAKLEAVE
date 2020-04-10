import { LeaveserviceService } from './../../services/leaveservice.service';
import { Ileave } from './../../models/ileave';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/models/iemployee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaveconfig',
  templateUrl: './leaveconfig.component.html',
  styleUrls: ['./leaveconfig.component.css']
})
export class LeaveconfigComponent implements OnInit {

  filteredLeaves: Ileave[];
  leavelist: Ileave[] = [];
  errorMessage: string;
  empId;
  header: boolean = false;
  employee: IEmployee;
  filteredEmployee: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };

  constructor(private http: HttpClient, private leaveSerice: LeaveserviceService, private employeeService: EmployeeserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.leaveSerice.getleaves().subscribe(
      leaves => {
        this.leavelist = leaves;
        this.filteredLeaves = this.leavelist;
      },
      error => this.errorMessage = <any>error
    );

    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
      }
    );
    if (this.empId) {
      this.header = true;
      this.employeeService.getemp(this.empId).subscribe(
        employee => {
          this.employee = employee;
          this.filteredEmployee = this.employee;
        },
        error => this.errorMessage = <any>error
      );
    } else {
      this.header = false;
    }

  }

  refresh(): void {

  }

  delete(id: number) {
    this.leaveSerice.deleteLeave(id).subscribe(
      error => this.errorMessage = <any>error
    )
  }


  onGetId(): void {

    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
      }
    );
    if (this.empId !== null) {
      this.header = true;
      this.employeeService.getemp(this.empId).subscribe(
        employee => {
          this.employee = employee;
          this.filteredEmployee = this.employee;
        },
        error => this.errorMessage = <any>error
      );
    } else {
      this.header = false;
    }
  }

}
