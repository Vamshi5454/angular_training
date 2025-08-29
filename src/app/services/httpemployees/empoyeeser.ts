import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Empoyeeser {
  emp_api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}
  getAllEmployees() {
    return this.httpClient.get(this.emp_api_url);
  }
  addEmployee(empToAdd: Object) {
    return this.httpClient.post(this.emp_api_url, empToAdd);
  }
  updateEmployee(empId: any, dataToUpdate: Object) {
    return this.httpClient.patch(`${this.emp_api_url}/${empId}`, dataToUpdate);
  }
  deleteEmployee(empId: any) {
    return this.httpClient.delete(`${this.emp_api_url}/${empId}`);
  }

  

}
