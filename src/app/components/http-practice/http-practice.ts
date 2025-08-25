import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http-practice',
  imports: [],
  templateUrl: './http-practice.html',
  styleUrl: './http-practice.css',
})
export class HttpPractice {
  product_api_url = 'https://fakestoreapi.com/products';
  isLoading: boolean = false;
  productArr: any;

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    this.isLoading = true;
    this.httpClient.get(this.product_api_url).subscribe((response) => {
      this.isLoading = false;
      this.productArr = response;
    });
  }
}
