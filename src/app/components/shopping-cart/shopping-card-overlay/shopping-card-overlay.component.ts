import {Component, OnInit} from '@angular/core';
import {ShoppingCardService} from '../../../services/shopping-card/shopping-card.service';
import {Product} from '../../../models/Product';

@Component({
    selector: 'app-shopping-card-overlay',
    templateUrl: './shopping-card-overlay.component.html',
    styleUrls: ['./shopping-card-overlay.component.scss']
})
export class ShoppingCardOverlayComponent implements OnInit {
    shoppingCard: Product[] = [];
    count: number = this.shoppingCard.length;

    constructor(private shoppingCardService: ShoppingCardService) {
        this.shoppingCardService.getItemsFromShoppingCard().subscribe(items => this.shoppingCard = items);
    }

    ngOnInit() {
    }

}
