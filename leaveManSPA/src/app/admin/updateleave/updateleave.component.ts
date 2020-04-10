import { LeaveserviceService } from './../../services/leaveservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ileave, Ileave2 } from './../../models/ileave';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateleave',
  templateUrl: './updateleave.component.html',
  styleUrls: ['./updateleave.component.css']
})
export class UpdateleaveComponent implements OnInit {

  errorMessage: string;
  empId;
  header: boolean = false;
  leave: Ileave;
  // ed:IEmployee[]=[];
  // editemployee1: IEmployee={ Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  // filteredEditEmployee1: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  // filteredEmployee: IEmployee = { Name: "", Id: 0, DOB: "", DOJ: "", Salary: 0, Email: "", Role: "", TotalLeave: "" };
  // previousUrl: string;
  // history = [];
  // ab: string;
  editleave3: Ileave2 = { id: 0, name: "", maxLeaves: 0 };

  // name=this.ed[0].Name;
  // email=this.ed[0].DOJ;
  // dob=this.ed[0].DOB;
  // doj=this.ed[0].DOJ;
  // salary=this.ed[0].Salary;
  // totalleave=this.ed[0].TotalLeave;
  // role=this.ed[0].Role;
  filteredLeaves: Ileave2[];
  leaves: Ileave2[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private leaveService: LeaveserviceService, private router: Router) { }

  


  uniqueid: number = Number(this.route.snapshot.paramMap.get('lid'));
  editleave2: Ileave2 = {
    id: this.editleave3.id,
    name: this.editleave3.name,
    maxLeaves: this.editleave3.maxLeaves 
   };
  onSubmit2(formData: NgForm) {
    this.editleave2.id = this.uniqueid;
    this.editleave2.name = this.editleave2.name;
    this.editleave2.maxLeaves = this.editleave2.maxLeaves;
    // console.log("formvalue: "+formData.value.name);
    console.log("Now its leave: "+this.editleave2);

    this.leaveService.updateLeave(this.editleave2).subscribe(
      
      (error: any) => this.errorMessage = <any>error
    );
    this.onGetId();


    formData.resetForm();
    this.router.navigate(['/leaveconfig', this.empId]);


  }

  onGetId(){
    console.log("Now its leave: "+this.editleave2);
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

    //   console.log(this.empId);
    if (this.empId !== null) {
      this.header = true;
      // this.employeeService.getemp(this.empId).subscribe(
      //   employee => {
      //     console.log(employee);

      //     this.employee = employee;
      //     this.filteredEmployee = this.employee;
      //   },
      //   error => this.errorMessage = <any>error
      // );

      this.leaveService.getlea2(this.uniqueid).subscribe(
        editemp => {
          console.log(editemp);
          // this.editleave3 = (editemp);
          // this.ed.push(editemp);

          // this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
      this.leaveService.getlea2(this.uniqueid).subscribe(
        editlea => {
          console.log("editlea main: "+editlea);
          this.editleave2 = editlea;
          // console.log(this.editleave2);
          
          
          // this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
      // console.log(this.editleave2);
      console.log("Now its leave2: "+this.editleave2);

    } else {
      this.header = false;
    }
  }






  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
        console.log(this.empId);
      }
    );
    this.route.paramMap.subscribe(
      params => {
        this.uniqueid = +params.get('lid');
        console.log(this.empId);
      }
    );

    //   console.log(this.empId);
    if (this.empId !== null) {
      this.header = true;
      // this.employeeService.getemp(this.empId).subscribe(
      //   employee => {
      //     console.log(employee);

      //     this.employee = employee;
      //     this.filteredEmployee = this.employee;
      //   },
      //   error => this.errorMessage = <any>error
      // );

      this.leaveService.getlea2(this.uniqueid).subscribe(
        editemp => {
          console.log(editemp);
          this.editleave3 = (editemp);
          // this.ed.push(editemp);

          // this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
      this.leaveService.getlea2(this.uniqueid).subscribe(
        editlea => {
          console.log(editlea);
          this.editleave2 = editlea;
          console.log(this.editleave2);
          
          
          // this.filteredEditEmployee1 = this.editemployee1;
        },
        error => this.errorMessage = <any>error
      );
      console.log(this.editleave2);
    } else {
      this.header = false;
    }
  }

}
