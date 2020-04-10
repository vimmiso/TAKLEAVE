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

  editleave3: Ileave2 = { id: 0, name: "", maxLeaves: 0 };

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

    this.leaveService.updateLeave(this.editleave2).subscribe(
      
      (error: any) => this.errorMessage = <any>error
    );
    this.onGetId();


    formData.resetForm();
    this.router.navigate(['/leaveconfig', this.empId]);


  }

  onGetId(){
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
      }
    );
    this.route.paramMap.subscribe(
      params => {
        this.uniqueid = +params.get('lid');
      }
    );

    if (this.empId !== null) {
      this.header = true;

      this.leaveService.getlea2(this.uniqueid).subscribe(
        editemp => {
        },
        error => this.errorMessage = <any>error
      );
      this.leaveService.getlea2(this.uniqueid).subscribe(
        editlea => {
          this.editleave2 = editlea;
        },
        error => this.errorMessage = <any>error
      );

    } else {
      this.header = false;
    }
  }






  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.empId = +params.get('id');
      }
    );
    this.route.paramMap.subscribe(
      params => {
        this.uniqueid = +params.get('lid');
      }
    );

    if (this.empId !== null) {
      this.header = true;

      this.leaveService.getlea2(this.uniqueid).subscribe(
        editemp => {
          this.editleave3 = (editemp);
        },
        error => this.errorMessage = <any>error
      );
      this.leaveService.getlea2(this.uniqueid).subscribe(
        editlea => {
          this.editleave2 = editlea;
          },
        error => this.errorMessage = <any>error
      );
    } else {
      this.header = false;
    }
  }

}
