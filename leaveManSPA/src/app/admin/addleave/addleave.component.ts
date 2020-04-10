import { Component, OnInit } from '@angular/core';
import { Ileave } from 'src/app/models/ileave';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { LeaveserviceService } from 'src/app/services/leaveservice.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {

  filteredLeaves:Ileave[];
  leavelist:Ileave[] = [];
  errorMessage:string;
  empId;
  leavename;
  noofdays;
 header:boolean=false;
 employee:IEmployee;
 filteredEmployee:IEmployee;
 previousUrl: string;
 history = [];
 ab: string;

 uniqueid:number = Number(this.route.snapshot.paramMap.get('id'));


 onSubmit(formData:NgForm){
  // var date1 = new Date(this.doj);
  // var date2 = new Date(this.dob);
  // console.log(date1);
  // console.log(date2);
  
   const lea:Ileave = {
     Id:0,
     Name:this.leavename,
     MaxLeaves:Number(this.noofdays)
    
  };
  console.log(lea);

  this.leaveSerice.addLeave(lea).subscribe(
    
    (error:any) => this.errorMessage = <any>error
  );
  this.onGetId();
  console.log(this.empId+"hello");
  formData.resetForm();
  this.router.navigate(['/leaveconfig',this.empId]);

  
  // this.router.navigate(['/employeelogin',this.uniqueid]).then(nav => {
  //   console.log(nav); // true if navigation is successful
  // }, err => {
  //   console.log(err) // when there's an error
  // });
  
}






 constructor(private http:HttpClient,private leaveSerice:LeaveserviceService,private employeeService:EmployeeserviceService,private route:ActivatedRoute,private router: Router) { }
 prevUrl() {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
      this.history = [...this.history, urlAfterRedirects];
    });
  this.ab = this.getPreviousUrl();
  console.log(this.ab);
}
getHistory(): string[] {
  return this.history;
}

getPreviousUrl(): string {
  return this.history[this.history.length - 2] || '/index';
}
  ngOnInit(): void {
    this.leaveSerice.getleaves().subscribe(
      leaves => {
        this.leavelist = leaves;
        this.filteredLeaves = this.leavelist;
      },
      error => this.errorMessage = <any>error
    );


    // this.employeeService.getemployees().subscribe(
    //   employees => {
    //     this.employeelist = employees;
    //     this.filteredEmployees = this.employeelist;
    //   },
    //   error => this.errorMessage = <any>error
    // );
  

    this.prevUrl();
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

  
 onGetId():void{
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


}
