import { Component } from '@angular/core';
import { Employee } from '../../services/EmployeeService/employee';

@Component({
  selector: 'app-assign-services',
  imports: [],
  templateUrl: './assign-services.html',
  styleUrl: './assign-services.css',
})
export class AssignServices {
  constructor(private employee: Employee) {}

  employees: any[] = [];

  ngOnInit() {
    this.employees = this.employee.getAllEmployees();
  }

  onFilteChange(value:string){
    if(value=='all'){
      this.employees = this.employee.getAllEmployees()
    }
    else if(value=='male'){
      this.employees = this.employee.getMaleEmployees();

    }else{
      this.employees = this.employee.getFemaleEmployees();
    }
  }
}
