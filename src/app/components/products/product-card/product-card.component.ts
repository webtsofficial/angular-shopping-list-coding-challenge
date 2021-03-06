import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {Product} from '../../../models/Product';
import {ShoppingCardService} from "../../../services/shopping-card/shopping-card.service";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;

    constructor(private shoppingCartService: ShoppingCardService) {
    }

    ngOnInit() {
    }

    addItemToShoppingCart(item: Product): void {
        this.shoppingCartService.addItemToShoppingCart(item);
    }

}
