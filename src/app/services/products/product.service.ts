import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Product} from '../../models/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    allProducts: Observable<{}>;

    constructor(private httpClient: HttpClient) {
        this.allProducts = this.getAllProducts();
    }

    getAllProducts() {
        return this
            .httpClient
            .get<Product[]>('https://jsonplaceholder.typicode.com/photos/');
    }
}
