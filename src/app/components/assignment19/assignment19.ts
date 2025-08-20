import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';

import assignData from './assignment_data';

@Component({
  selector: 'app-assignment19',
  imports: [FontAwesomeModule, NgxPaginationModule, FormsModule],
  templateUrl: './assignment19.html',
  styleUrl: './assignment19.css',
})
export class Assignment19 {
  data = assignData;
  p: number = 1;
  title: string = '';
  faTrash = faTrash;

  star = faStar;

  filtered: any[] = this.data;


  // const stars: ('full'|'half'|'empty')[] = [];

  fileterdData() {
    this.filtered = this.data.filter((d) => {
      // return d.title.includes(this.title);
      return d.title.toLowerCase().includes(this.title.toLowerCase());
    });
    console.log(this.filtered);
  }

  fileterByLowest() {
    this.filtered = [...this.filtered].sort((a, b) => {
      return a.price - b.price;
    });
  }

  fileterByHighest() {
    this.filtered = [...this.filtered].sort((a, b) => {
      return b.price - a.price;
    });
  }
}
