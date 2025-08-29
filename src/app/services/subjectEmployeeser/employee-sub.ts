import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EmployeeSub {
  emp_api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}
  private employeeSubject = new BehaviorSubject<any[]>([]);

  employees$ = this.employeeSubject.asObservable();

  getAllEmployees() {
    return this.httpClient.get<any[]>(this.emp_api_url);
  }
  addEmployee(empToAdd: Object) {
    return this.httpClient.post(this.emp_api_url, empToAdd);
  }
  deleteEmployee(empId: any) {
    return this.httpClient.delete(`${this.emp_api_url}/${empId}`);
  }

  get value() {
    return this.employeeSubject.value;
  }

  setEmployees(list: any[]) {
    this.employeeSubject.next(list);
  }

  get currentEmployees() {
    return this.employeeSubject.value;
  }

  clearEmployees() {
    this.employeeSubject.next([]);
  }
}
