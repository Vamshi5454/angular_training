import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeSub } from '../../services/subjectEmployeeser/employee-sub';
@Component({
  selector: 'app-subject-employees',
  imports: [FormsModule, CommonModule],
  templateUrl: './subject-employees.html',
  styleUrl: './subject-employees.css',
})
export class SubjectEmployees {
  // employee$!: any;
  constructor(private employeeService: EmployeeSub) {}
  empdata: any;

  ngOnInit() {
    
    this.employeeService.employees$.subscribe((list: any) => {
      this.empdata = list;
    });
    this.employeeService.loadEmployess();
    
  }

  employee: any = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    sal: 0,
  };

  addEmployee() {
    this.employeeService.addEmployee(this.employee);
    
    this.employee = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      sal: 0,
    };
  }
  onDelete(id:any){
    this.employeeService.deleteEmployee(id)
  }

  
}
