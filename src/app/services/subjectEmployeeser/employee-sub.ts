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
}
