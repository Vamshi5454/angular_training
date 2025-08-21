import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import emparray from './employee_dats';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {
  employees = emparray;
  faTrash = faTrash;
  faEye = faEye;
  faEdit = faEdit;
  filtered: any = this.employees;

  deleteId(id: number) {
    // Swal.fire('Good job!', 'You clicked the button!', 'success');

    Swal.fire({
      title: 'Do you want to delete this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.filtered = [...this.filtered].filter((d) => d.id != id);
        Swal.fire('User deletion Sucess');
      } else if (result.isDenied) {
        Swal.fire('User Not deleted');
      }
    });
  }

  addemployee(
    name: string,
    designation: string,
    department: string,
    salary: number,
    email: string
  ) {
    new Snackbar('Helloooo, Good Morning', {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'User Added succesfully',
    });
    const nextId = this.filtered.length
      ? Math.max(...this.employees.map((e) => e.id)) + 1
      : 1;

    const emp = {
      id: nextId,
      name,
      designation,
      department,
      salary: Number(salary),
      email,
    };
    // this.employees = [...this.employees, emp];
    this.filtered = [...this.filtered, emp];
  }
}
