import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/products/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products;

  constructor(private productService: ProductService) {
    productService.allProducts.subscribe(result => this.products = result);
  }

  ngOnInit() {
  }

}
