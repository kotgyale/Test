import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeDTO } from '../_models/employee.dto';

import { EmployeeDataService } from '../_services/employee-data.service'

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: EmployeeDTO[];
  constructor(public employeeService: EmployeeDataService, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(employee){
    this.employeeService.deleteEmployee(employee);
    alert("Employee Deleted successfully");
  }

  updateEmployee(employee){

  }

}
