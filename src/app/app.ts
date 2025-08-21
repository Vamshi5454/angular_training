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
import { EmployeeList } from "./components/employee-list/employee-list";

@Component({
  selector: 'app-root',
  imports: [Navbar, Categories, Footer,  EmployeeCRUD],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-training');
}
