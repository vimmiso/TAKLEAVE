import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

const APP_ROUTES3: Routes = [
    {path: 'employees/:id',component: EmployeedetailsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES3)],
    exports: [RouterModule]
    
})
export class EmployeeRouting{

}