import { Component } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
})
export class Child2Demo {
  aChild2: any;
  b: number = 200;

  name: string = 'Eureka Infotech';

  // nameEvent = new EventEmitter(); // 1. create EventEmitter object
  // sendDataToParent() {
  //   // 2. emit the data using EventEmitter object
  //   this.nameEvent.emit(this.name);
  // }
}
