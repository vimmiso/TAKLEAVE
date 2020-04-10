import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { AdminRouting } from './admin/admin.routing';
import { AdminModule } from './admin/admin.module';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AdminModule,
    EmployeeModule,
    SharedModule,
    AppRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
