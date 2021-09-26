import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDTO } from '../_models/employee.dto';
import { EmployeeDataService } from '../_services/employee-data.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form: FormGroup;
  employee: EmployeeDTO;
  emailCheck: boolean = false;
  constructor(public employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-z]+")]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl(''),
      married: new FormControl(''),
      doj: new FormControl('', Validators.required),
      contact: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.employee = this.form.value;
    this.employeeService.getEmployees().forEach(emp => {
      if(emp.email === this.employee.email){
        alert("This Email is allready present use another Email!!")
      }
      else{
        this.employeeService.addEmployee(this.employee);
      }
    })
    
    
  }

}
