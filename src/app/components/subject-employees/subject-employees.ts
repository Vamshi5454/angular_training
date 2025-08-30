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
    // this.employee$ = this.employeeService.employees$;
    // this.employeeService.loadEmployess().subscribe((list: any) => {
    //   //   this.employeeService.setEmployees(list);
    // });

    this.employeeService.employees$.subscribe((list: any) => {
      this.empdata = list;
    });
    this.employeeService.loadEmployess();
    // this.employeeService.employees$.subscribe((data: any) => {
    //   console.log(data);
    // });
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

    // .subscribe((created: any) => {
    //   const updated = [...this.employeeService.currentEmployees(), created];
    this.employee = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      sal: 0,
    };
    // });
  }
  onDelete(id:any){
    this.employeeService.deleteEmployee(id)
  }

  
}
