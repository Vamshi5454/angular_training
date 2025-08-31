import { HttpClient } from '@angular/common/http';
import { Component, effect, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-demo',
  imports: [CommonModule],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css',
})
export class SignalDemo {
  userId = signal(1);
  userData: any;
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  destroyEffect() {
    this.userDetailsEffect.destroy();
  }
  constructor(private httpClient: HttpClient) {}
  fetchUserDetails(id: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((response) => {
        this.userData = response;
      });
  }
  incrementUserId() {
    this.userId.update((val) => val + 1);
  }

  todo = signal([
    { id: 1, title: 'Task 1', isCompleted: false },
    { id: 2, title: 'simple task', isCompleted: true },
    { id: 3, title: 'Drink Water', isCompleted: false },
    { id: 4, title: 'eat food', isCompleted: true },
  ]);

  completed = computed(() => {
    return this.todo().filter((t: any) => t.isCompleted);
  });

  remaining = computed(() => {
    return this.todo().filter((t) => !t.isCompleted);
  });

  // toggle(id:any){
  //   this.todo.update((list:any)=>{
  //     list[id].isCompleted = !list[id].isCompleted;
  //   })
  // }

  toggle(id: any) {
    this.todo.update((list) =>
      list.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  }
}
