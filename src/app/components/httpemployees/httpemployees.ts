import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../../models/employees';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../services/EmployeeService/employee';
@Component({
  selector: 'app-httpemployees',
  imports: [CommonModule, FormsModule],
  templateUrl: './httpemployees.html',
  styleUrl: './httpemployees.css',
})
export class Httpemployees {
  employee_api_url = 'http://localhost:3000/employees';
  isLoading: boolean = false;
  employeeArr: Employees[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.fetchEmployees();
  }

  employee: Employees = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    sal: 0,
  };
  editEmployee: Employees | null = this.employee;

  fetchEmployees() {
    this.isLoading = true;
    this.httpClient
      .get<Employees[]>(this.employee_api_url)
      .subscribe((response: Employees[]) => {
        this.isLoading = false;
        this.employeeArr = response;
      });
  }

  onDelete(id: number) {
    this.httpClient.delete(`${this.employee_api_url}/${id}`).subscribe(() => {
      console.log('employee deleted');
      this.fetchEmployees();
    });
  }

  addEmployee() {
    if (!this.employee.id) {
      this.httpClient
        .post(this.employee_api_url, this.employee)
        .subscribe(() => {
          console.log('employee added');
          this.fetchEmployees();
        });
    }
  }

  onEdit(emp: Employees) {
    this.editEmployee = { ...emp };
    this.employee = this.editEmployee;
    console.log(this.editEmployee);
  }

  // onUpdate() {
  //   this.httpClient
  //     .patch(`${this.employee_api_url}/${this.editEmployee.id}`, this.employee)
  //     .subscribe(() => {
  //       console.log("employee updated");
  //     });
  // }

  onUpdate() {
    if (this.editEmployee && this.editEmployee.id) {
      this.httpClient
        .patch(
          `${this.employee_api_url}/${this.editEmployee.id}`,
          this.editEmployee
        )
        .subscribe(() => {
          console.log('employee updated');
          this.fetchEmployees();
          this.editEmployee = null;
          this.employee = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            sal: 0,
          };
        });
    }
  }
}
