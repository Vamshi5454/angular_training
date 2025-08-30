import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSub {
  emp_api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}
  private employeeSubject = new BehaviorSubject<any[]>([]);

  employees$: Observable<any> = this.employeeSubject.asObservable();

  // sampledata(data: any) {
  //   this.employees$.next(data);
  // }

  loadEmployess() {
    this.httpClient.get(this.emp_api_url).subscribe((list: any) => {
      this.employeeSubject.next(list);
    });
  }

  addEmployee(emp: any) {
    this.httpClient.post(this.emp_api_url, emp).subscribe((created: any) => {
      const updated = [...this.employeeSubject.value, created];
      this.employeeSubject.next(updated);
    });
  }

  deleteEmployee(empId: any) {
    this.httpClient.delete(`${this.emp_api_url}/${empId}`).subscribe(() => {
      this.loadEmployess();
    });
  }

  // getAllEmployees() {
  //   return this.httpClient.get<any[]>(this.emp_api_url);
  // }
  // addEmployee(empToAdd: Object) {
  //   return this.httpClient.post(this.emp_api_url, empToAdd);
  // }
  // deleteEmployee(empId: any) {
  //   return this.httpClient.delete(`${this.emp_api_url}/${empId}`);
  // }

  // value() {
  //   return this.employeeSubject.value;
  // }

  // setEmployees(list: any[]) {
  //   this.employeeSubject.next(list);
  // }

  // currentEmployees() {
  //   return this.employeeSubject.value;
  // }

  // clearEmployees() {
  //   this.employeeSubject.next([]);
  // }
}
