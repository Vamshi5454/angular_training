import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  myName: string = 'virat';
  img_url: string = 'https://shorturl.at/Pit2d';

  addToCart() {
    alert('Your Item is adde to Cart!!!');
  }
  flag: boolean = true;
  onClickToggle() {
    this.flag = !this.flag;
  }

  //component for second question
  maxChars: number = 100;
  count: number = this.maxChars;

  message: String = '';

  onTextChange(event: any) {
    const enteredText = event.target.value;
    this.count = this.maxChars - enteredText.length;
  }

  selectedState: string | null = null; //3rd question

  onStateChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedState = select.value || null;
  }

  isPassword: boolean = true; //    5th quesstion password hidden or visible

  togglePassword() {
    this.isPassword = !this.isPassword;
  }

  
  count1: number = 0; //6th question - counter

  increment() {
    this.count1++;
  }
  decrement() {
    this.count1--;
  }
  reset() {
    this.count1 = 0;
  }

  celsius: number | null = null; //8th question - conversion
  fahrenheit: number | null = null;

  convertToFahrenheit() {
    if (this.celsius !== null && !isNaN(this.celsius)) {
      this.fahrenheit = (this.celsius * 9) / 5 + 32;
    } else {
      this.fahrenheit = null;
    }
  }
}
