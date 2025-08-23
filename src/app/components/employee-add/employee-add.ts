import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['employeeAdded'],
})
export class EmployeeAdd {
  employeeAdded = new EventEmitter<any>();

  newEmployee = {
    name: '',
    designation: '',
    department: '',
    salary: 0,
    email: '',
  };

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.email) {
      this.employeeAdded.emit({ ...this.newEmployee });
      this.newEmployee = {
        name: '',
        designation: '',
        department: '',
        salary: 0,
        email: '',
      };
    }
  }
}
