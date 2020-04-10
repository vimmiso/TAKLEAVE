import { Iemployeeleave } from './../../models/iemployeeleave';
import { EmployeeleaveserviceService } from './../../services/employeeleaveservice.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  filteredEmployees:IEmployee[];
  employeelist:IEmployee[] = [];
  filteredEmployeesleave:Iemployeeleave[];
  employeeleavelist:Iemployeeleave[] = [];
  errorMessage:string;
  show1:boolean = true;
  show2:boolean = false;
  show3:boolean = false;
  show4:boolean = false;
  leavetype:string="Select Type";
  fromdate;
  todate;
  status:string = "Pending";

  uniqueid:number = Number(this.route.snapshot.paramMap.get('id'));
  empId;
  header:boolean=false;
  employee:IEmployee;
  filteredEmployee:IEmployee = {Name:"",Id:0,DOB:"",DOJ:"",Salary:0,Email:"",Role:"",TotalLeave:""};
  ngOnInit(): void {
    this.onLoad();
    // console.log(this.employeeleavelist)
    // console.log(this.uniqueid);
  }
  onLoad():void{
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
    this.employeeleaveservice.getemployeeleavemaps().subscribe(
      leaves => {
        this.employeeleavelist = leaves;
        this.filteredEmployeesleave = this.employeeleavelist;
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

  SaveFormData(formData: NgForm){
    var date1 = new Date(this.fromdate);
    var date2 = new Date(this.todate);
    var time = date2.getTime()-date1.getTime();
      const days = Number(time/(3600*1000*24));
    console.log(days);
    console.log(date1);
    console.log(date2);
    
    // this.fromdate=this.datePipe.transform(this.fromdate, "dd-MM-yyyy");

    // this.todate=this.datePipe.transform(this.todate, "dd-MM-yyyy");
     const leave = {
      EmployeeId: this.uniqueid,
      LeaveId:2,
      Status:this.status,
      StartDate:date1.toDateString(),
      EndDate:date2.toDateString(),
      LeaveType:this.leavetype,
      NoofDays: days
      // EmployeeId: 2,
      // LeaveId:2,
      // Status:'Pending',
      // StartDate:'12-04-2020',
      // EndDate:'16-04-2020',
      // LeaveType:'Sick',
      // NoofDays: 5
      // Password: this.password
    };
    console.log(leave);
    this.http.post('http://localhost:5000/api/empleavemapping',leave)
    .subscribe((response)=>{
      
      // this.employeeleavelist.push(<Iemployeeleave>leave);
      console.log(response);
    });
    this.onLoad();
    
    formData.resetForm();
    
    
    // this.router.navigate(['/employeelogin',this.uniqueid]).then(nav => {
    //   console.log(nav); // true if navigation is successful
    // }, err => {
    //   console.log(err) // when there's an error
    // });
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = true;
  }

  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,
    private route:ActivatedRoute,private employeeleaveservice:EmployeeleaveserviceService,
    private router: Router) { }
 
    onGetId():void{
      this.employeeleaveservice.getemployeeleavemaps().subscribe(
        leaves => {
          this.employeeleavelist = leaves;
          this.filteredEmployeesleave = this.employeeleavelist;
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
      if(this.empId){
        this.header=true;
        this.employeeService.getemp(this.empId).subscribe(
          employee => {
            console.log(employee);
            this.employee = employee;
            this.filteredEmployee = this.employee;
          },
          error => this.errorMessage = <any>error
        );
      }else{
        this.header=false;
      }
     }
    

  onClick1():void{
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.onGetId();
  }

  onClick2():void{
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = false;
    this.onGetId();
  }

  onClick3():void{
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;
    this.onGetId();
  }

  onClick4():void{
    // this.show1 = false;
    // this.show2 = true;
    // this.show3 = false;
    // this.show4 = true;

  }
  
  // Id:number,
  //   EmployeeId:number,
  //   LeaveId:number,
  //   Status:string,
  //   StartDate:string,
  //   EndDate:string,
  //   LeaveType:string,
  //   NoofDays:number
 

  


}
