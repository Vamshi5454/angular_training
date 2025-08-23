import { Component, EventEmitter } from '@angular/core';
import empData from './employee_crud_data';
import { CommonModule } from '@angular/common';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';
import employeeData from '../employee-list/employee-data';
@Component({
  selector: 'app-employee-crud-parent',
  imports: [EmployeeTable, EmployeeAdd, CommonModule],
  templateUrl: './employee-crud-parent.html',
  styleUrl: './employee-crud-parent.css',
})
export class EmployeeCrudParent {
  employees = empData;

  addEmployee(newEmployee: any) {
    newEmployee.id = this.employees.length
      ? Math.max(...this.employees.map((e) => e.id)) + 1
      : 1;
    this.employees.push(newEmployee);
  }

  // Delete employee
  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
