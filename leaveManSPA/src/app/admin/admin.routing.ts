import { UpdateleaveComponent } from './updateleave/updateleave.component';
import { EmployeeResolverService } from './../services/resolver/employee-resolver.service';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AddleaveComponent } from './addleave/addleave.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LeaveconfigComponent } from './leaveconfig/leaveconfig.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES2: Routes = [
    {
        path: 'manageemp/:id',
        component: ManageEmployeeComponent,
        resolve: {resolvedData: EmployeeResolverService}
    },
    {path: 'leavelist/:id',component: LeavelistComponent},
    {path: 'leaveconfig/:id',component: LeaveconfigComponent},
    {path: 'adminslogin',component: AdminloginComponent},
    {
        path: 'manageemp/:id/add',
        component: AddemployeeComponent,
        resolve: {resolvedData: EmployeeResolverService}
    },
    {
        path: 'manageemp/:id/edit/:lid',
        component: UpdateemployeeComponent,
        resolve: {resolvedData: EmployeeResolverService}
    }, 
    {path: 'leaveconfig/:id/add',component: AddleaveComponent},   
    {path: 'leaveconfig/:id/edit/:lid',component: UpdateleaveComponent},    
 
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES2)],
    exports: [RouterModule]
    
})
export class AdminRouting{

}