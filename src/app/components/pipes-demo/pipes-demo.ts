import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
// import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
// import { OrdianlPipe } from '../../custom-pipes/ordianl-pipe';
import { OrdianlPipe } from '../../custom-pipe/ordianl/ordianl-pipe';
import { AgePipe } from '../../custom-pipe/age/age-pipe';
import { SalutationPipe } from '../../custom-pipe/Salutation/salutation-pipe';
import { SearchPipe } from '../../custom-pipe/search/search-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdianlPipe,
    AgePipe,
    SalutationPipe,
    SearchPipe,
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  myName = 'Sachin tENduLKaR';
  mySal = 5000;
  today = new Date();

  user = { name: 'Virat Kohli', age: 45, add: 'Delhi' };
  arr = [10, 20, 30, 40, 50, 60, 70];

  num = interval(2000);

  msg: string = '';
  msg2: string = '';

  employees = [
    { id: 1, name: 'John', gender: 'male', age: 30 },
    { id: 2, name: 'Alice', gender: 'female', age: 25 },
    { id: 3, name: 'Bob', gender: 'male', age: 28 },
  ];
  searchText = '';
}
