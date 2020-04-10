import { Ileave2 } from './../../models/ileave';
import { LeaveserviceService } from './../../services/leaveservice.service';
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
  employeeLeavelist2: Iemployeeleave[] = [];
  leaveList:Ileave2[]=[];
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



  constructor(private http: HttpClient, private employeeService: EmployeeserviceService, private employeeLeaveService: EmployeeleaveserviceService,private leaveService:LeaveserviceService ,private route: ActivatedRoute) { }

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
        this.employeeLeavelist2 = this.filteredEmployeeLeaves;
      },
      error => this.errorMessage = <any>error
    );
    this.leaveService.getleaves2().subscribe(
      lea => {
        this.leaveList = lea;
      },
      error => this.errorMessage = <any>error
    )


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

  

  decision1(de:string){
    if(de !== "0"){
      // var totalWords = "my name is rahul.";
      de = de.replace(/ .*/,'');
      alert(de);
      console.log(de);
      
      this.employeeLeavelist = this.filteredEmployeeLeaves.filter( res=>{
        const l:string = ""+res.leaveType;
        console.log(de +" "+l);
        return res.leaveType.toString().toLowerCase().match(de.toString().toLowerCase());
      });
    }else if(de === "0"){
      this.ngOnInit();
    }
   
  }
  decision2(de:string){
    console.log(de);
    
    if(de !== "0"){
      this.employeeLeavelist = this.filteredEmployeeLeaves.filter( res=>{
        if(res.id!==null){
          console.log(de +" "+res.id.toString());
          return res.employeeId.toString().toLowerCase().match(de.toString().toLowerCase());
        }

      });
    }else if(de === "0"){
      this.ngOnInit();
    }
  }

  decision3(emp:Iemployeeleave,de:string){
    // this.action=de;

    emp.status=de;
    this.e=emp;
    this.employeeLeaveService.updateLeaveDecision(emp).subscribe(
      error => this.errorMessage = <any>error
    )
    console.log(emp);
  }

}
