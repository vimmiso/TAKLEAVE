import { SharedModule } from './../shared/shared.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { LeaveconfigComponent } from './leaveconfig/leaveconfig.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { AdminRouting } from './admin.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddleaveComponent } from './addleave/addleave.component';
// import { HeaderComponent } from '../Layoutcomponent/header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UpdateleaveComponent } from './updateleave/updateleave.component';



@NgModule({
  declarations: [ManageEmployeeComponent, LeaveconfigComponent, LeavelistComponent, AdminloginComponent, AddemployeeComponent, AddleaveComponent, UpdateemployeeComponent, UpdateleaveComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
    AdminRouting
  ],
})
export class AdminModule { }
