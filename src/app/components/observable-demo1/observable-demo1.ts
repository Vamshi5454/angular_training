import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  concatMap,
  filter,
  forkJoin,
  from,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  range,
  take,
} from 'rxjs';
@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  currentTime$ = new Observable<string>((publisher) => {
    setInterval(() => publisher.next(new Date().toLocaleTimeString()), 1000);
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();
    // this.forkjoin_demo();
    // this.mergemap_demo();
    // this.concatmap_demo();
  }
  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsPublisher = from(cars);

    carsPublisher.subscribe((val) => console.log(val));
  }
  interval_demo() {
    const numPublisher = interval(1000);
    // numPublisher.subscribe(val => console.log(val));

    const numPublisherUpTo5 = numPublisher.pipe(take(5));
    // numPublisherUpTo5.subscribe(val => console.log(val));

    const numPublisherEven = numPublisher.pipe(filter((val) => val % 2 == 0));
    // numPublisherEven.subscribe(val => console.log(val));

    const numPublisherSquare = numPublisher.pipe(map((val) => val * val));
    numPublisherSquare.subscribe((val) => console.log(val));
  }
  forkjoin_demo() {
    let userNames = [
      'sanjaysamantra1',
      'ushamahesh818',
      'seun035',
      'vamshi5454',
    ];
    let requests = userNames.map((userName) => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`);
    });
    forkJoin(requests).subscribe((responses) => {
      console.log(responses);
    });
  }
  mergemap_demo() {
    let userObservable = of(1, 2, 3, 4, 5);

    userObservable
      .pipe(
        mergeMap((OuterObservableResponse) => {
          return this.httpClient.get(
            `https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`
          );
        })
      )
      .subscribe((innerObservableResponse) => {
        console.log(innerObservableResponse);
      });
  }
  concatmap_demo() {
    let userObservable = of(1, 2, 3, 4, 5);

    userObservable
      .pipe(
        concatMap((OuterObservableResponse) => {
          return this.httpClient.get(
            `https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`
          );
        })
      )
      .subscribe((innerObservableResponse) => {
        console.log(innerObservableResponse);
      });
  }
}
