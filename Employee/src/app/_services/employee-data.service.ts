import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeDTO } from '../_models/employee.dto'
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  employees: EmployeeDTO[] = [{name: 'Ravi',
    address: 'Pune',
    email: 'Ravi123@gmail.com ',
    dob: '29-05-1994',
    gender: 'Male',
    doj: '29-11-2021',
    married: 'Single',
    contact: '7276278721'}];
  constructor(private router: Router) { }

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee: EmployeeDTO){
    this.employees.push(employee);
    alert("Employee Created Successfully!!");
    this.router.navigate(["/employee-list"]);
  }

  updateEmployee(employee){
    
  }

  deleteEmployee(employee){
    return this.employees.splice(this.employees.findIndex(emp => emp.email === employee.email),1);
  }
}
