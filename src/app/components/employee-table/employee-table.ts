import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule ],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employees'],              // ✅ Input via metadata
  outputs: ['employeeDeleted']
})
export class EmployeeTable {
  employees: any[] = [];
  employeeDeleted = new EventEmitter<number>();

  deleteEmployee(id: number) {
    this.employeeDeleted.emit(id);
  }
}
