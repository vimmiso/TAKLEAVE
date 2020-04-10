import { SharedModule } from './../shared/shared.module';
import { EmployeeRouting } from './employee.routing';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [EmployeeListComponent,EmployeedetailsComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    EmployeeRouting
    

  ]
})
export class EmployeeModule { }
