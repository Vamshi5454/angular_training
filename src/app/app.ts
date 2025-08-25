import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Databinding } from './components/databinding/databinding';
import { Directives } from './components/directives/directives';
import { Assignment19 } from './components/assignment19/assignment19';
import { EmployeeCRUD } from './components/employee-crud/employee-crud';
import { EmployeeList } from './components/employee-list/employee-list';
import { PipesDemo } from './components/pipes-demo/pipes-demo';
import { ParentDemo } from './components/parent-demo/parent-demo';
import { EmployeeCrudParent } from './components/employee-crud-parent/employee-crud-parent';
import { AssignServices } from './components/assign-services/assign-services';
import { HttpPractice } from './components/http-practice/http-practice';
import { Httpemployees } from './components/httpemployees/httpemployees';

@Component({
  selector: 'app-root',
  imports: [Navbar, Categories, Footer, Httpemployees],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
}
