import { Injectable } from '@angular/core';
import {Product} from '../../models/Product';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
    public shoppingCard = new Observable<Product[]>();

    constructor() {

    }

    addProductToShoppingCart(product: Product) : void {
      // todo: check if shopping-card exists and isArray exists
    }
}
