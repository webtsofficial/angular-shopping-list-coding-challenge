import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/products/product.service';
import {Product} from '../../../models/Product';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products;

  constructor(private productService: ProductService) {
    productService.allProducts.subscribe<Product[]>((result: Product[]) => {
      result = result.map(
          (product: Product) => {
            product.price = 15;
            return product;
          });
        this.products = result;
    });
  }

  ngOnInit() {
  }

}
