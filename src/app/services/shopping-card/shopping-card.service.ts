import { Injectable } from '@angular/core';
import {Product} from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
  public shoppingCard: Product[];

  constructor() { }
}
