import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'employees',component: EmployeeComponent},
    {path: 'admins',component: AdminComponent},
    { path: '**', component: PagenotfoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
    
})
export class AppRouting{

}