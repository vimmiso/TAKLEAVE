import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  errorMessage: string;
  empId;
  header: boolean = false;
  employee: IEmployee;
  filteredEmployee: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  previousUrl: string;
  history = [];
  ab: string;
  
  name;
  email;
  dob;
  doj;
  filteredEmployees:IEmployee[];
  employeelist:IEmployee[] = [];
 
  uniqueid:number = Number(this.route.snapshot.paramMap.get('id'));
  
  onSubmit(formData:NgForm){
    var date1 = new Date(this.doj);
    var date2 = new Date(this.dob);
    console.log(date1);
    console.log(date2);
    
     const emp:IEmployee = {
       Id:0,
      Name:this.name,
      DOJ:date1.toDateString(),
      DOB:date2.toDateString(),
      Salary:400000,
      Email:this.email,
      Role:'Employee',
      TotalLeave:'0'
    };
    console.log(emp);
  
    this.employeeService.addEmp(emp).subscribe(
      
      (error:any) => this.errorMessage = <any>error
    );
    this.onGetId();
  
    
    formData.resetForm();
    this.router.navigate(['/manageemp',this.empId]);

    
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
    //  this.employeeService.getemployees().subscribe(
    //    employees => {
    //      this.employeelist = employees;
    //      this.filteredEmployees = this.employeelist;

    //    },
    //    error => this.errorMessage = <any>error
    //  );
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
  

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

  
  onGetId(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
        console.log('From adding emp2: '+this.employeelist);
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
  
}
