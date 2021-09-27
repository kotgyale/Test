import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee.component'
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
{
  path: '',
  component: EmployeeDashboardComponent,
},
{ path: 'edit-employee/edit', component: EditEmployeeComponent },
{
  path: 'create-employee',
  component: CreateEmployeeComponent,
},
{
  path: 'employee-list',
  component: EmployeeDashboardComponent,
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
