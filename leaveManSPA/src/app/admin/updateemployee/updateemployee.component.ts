import { IEmployee2 } from './../../models/IEmployee2';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  errorMessage: string;
  empId;
  header: boolean = false;
  employee: IEmployee;
  ed:IEmployee[]=[];
  editemployee1: IEmployee={ Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  filteredEditEmployee1: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  filteredEmployee: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  previousUrl: string;
  history = [];
  ab: string;
  editemployee2: IEmployee2={ name: "", id: 0, dob: "", doj: "", salary: 0, email: "", role: "", totalLeave: "" };


  // name=this.ed[0].Name;
  // email=this.ed[0].DOJ;
  // dob=this.ed[0].DOB;
  // doj=this.ed[0].DOJ;
  // salary=this.ed[0].Salary;
  // totalleave=this.ed[0].TotalLeave;
  // role=this.ed[0].Role;
  filteredEmployees: IEmployee[];
  employeelist: IEmployee[] = [];
 

  uniqueid: number = Number(this.route.snapshot.paramMap.get('lid'));
  emp:IEmployee2 = {
    id: this.uniqueid,
    name: this.editemployee2.name,
    doj: this.editemployee2.doj,
    dob: this.editemployee2.dob,
    salary: this.editemployee2.salary,
    email: this.editemployee2.email,
    role: this.editemployee2.role,
    totalLeave: this.editemployee2.totalLeave
  };
  onSubmit(formData: NgForm) {
    this.emp.id = this.uniqueid;
    this.emp.name = this.emp.name;
    this.emp.email = this.emp.email;
    var date1 = new Date(this.emp.doj);
    var date2 = new Date(this.emp.dob);
    this.emp.doj = date1.toDateString();
    this.emp.dob = date2.toDateString();
    this.emp.salary=this.emp.salary;
    this.emp.role=this.emp.role;
    this.emp.totalLeave=this.emp.totalLeave;
    console.log(date1);
    console.log(date2);
   
    // console.log("formvalue: "+formData.value.name);
    console.log(this.emp);

    this.employeeService.updateEmp(this.emp).subscribe(

      (error: any) => this.errorMessage = <any>error
    );
    this.onGetId();


    formData.resetForm();
    this.router.navigate(['/manageemp', this.empId]);
    // this.reloadComponent();


    // this.router.navigate(['/employeelogin',this.uniqueid]).then(nav => {
    //   console.log(nav); // true if navigation is successful
    // }, err => {
    //   console.log(err) // when there's an error
    // });

  }



  constructor(private http: HttpClient, private employeeService: EmployeeserviceService, private route: ActivatedRoute, private router: Router) {
  }




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
    console.log(this.editemployee1);
   
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = (employees);
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );


    this.prevUrl();
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
        console.log("empId"+this.empId);
      }
    );
    this.route.paramMap.subscribe(
      params => {
        this.uniqueid = +params.get('lid');
        console.log("uniqueid"+this.uniqueid);
      }
    );
    console.log(this.empId);
    if (this.empId !==null) {
      this.header = true;
     
      this.employeeService.getemp2(this.uniqueid).subscribe(
        editemp => {
          console.log(editemp);
          this.emp = editemp;
          this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
      console.log(this.editemployee1);
    } else {
      this.header = false;
    }

   

  }


  onGetId(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
        console.log('From adding emp2: ' + this.employeelist);
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
      // this.employeeService.getemp(this.empId).subscribe(
      //   employee => {
      //     console.log(employee);
      //     this.employee = employee;
      //     this.filteredEmployee = this.employee;
      //   },
      //   error => this.errorMessage = <any>error
      // );
      // this.employeeService.getemp(this.uniqueid).subscribe(
      //   editemp => {
      //     console.log(editemp);
      //     this.editemployee1 = editemp;
      //     this.filteredEditEmployee1 = this.editemployee1;
      //   },
      //   error => this.errorMessage = <any>error
      // );
      this.employeeService.getemp2(this.uniqueid).subscribe(
        editemp => {
          console.log(editemp);
          this.emp = editemp;
          this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
    } else {
      this.header = false;
    }


  }


}
