import {Component, OnInit} from '@angular/core';
import {ShoppingCardService} from '../../../services/shopping-card/shopping-card.service';
import {Product} from '../../../models/Product';

@Component({
    selector: 'app-shopping-card',
    templateUrl: './shopping-card.component.html',
    styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {
    shoppingCard: Product[] = [];

    constructor(public shoppingCardService: ShoppingCardService) {
        this.shoppingCardService.getItemsFromShoppingCard().subscribe(items => {
            this.shoppingCard = items;
        });
    }

    ngOnInit() {
    }

}
