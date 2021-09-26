import { Component, OnInit } from '@angular/core';

import { EmployeeDTO } from '../_models/employee.dto';

import { EmployeeDataService } from '../_services/employee-data.service'

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: EmployeeDTO[];
  constructor(public employeeService: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(employee){
    this.employees = this.employeeService.deleteEmployee(employee);
    alert("Employee Deleted successfully")
  }

  updateEmployee(employee){
    
  }

}
