import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts: Observable<{}>;

  constructor(private httpClient: HttpClient) {
    this.allProducts = this.getAllProducts();
  }

  getAllProducts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos/');
  }
}
