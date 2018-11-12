import { Injectable } from '@angular/core';
import {Product} from '../../models/Product';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
    shoppingCardSubject: BehaviorSubject<Product[]>;
    shoppingCardObservable: Observable<Product[]>;
    shoppingCardItems: Product[] = [];

    constructor() {
        this.shoppingCardSubject = new BehaviorSubject<Product[]>([]);
        this.shoppingCardObservable = this.shoppingCardSubject.asObservable();
        this.shoppingCardObservable.subscribe(items => {
            this.shoppingCardItems = items;
        });
    }

    addItemToShoppingCart(item: Product) : void {
        this.shoppingCardItems.push(item);
        this.shoppingCardSubject.next(this.shoppingCardItems);
    }

    getItemsFromShoppingCard() {
        return this.shoppingCardObservable;
    }
}
