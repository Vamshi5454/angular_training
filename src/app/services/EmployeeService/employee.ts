import { Injectable } from '@angular/core';
import employeeData from './employee-data';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  employees = employeeData;

  getAllEmployees() {
   return this.employees;
  }
  getMaleEmployees() {
   return this.employees.filter((e) => e.gender == 'male');
  }
  getFemaleEmployees() {
   return  this.employees.filter((e) => e.gender == 'female');
  }
}
