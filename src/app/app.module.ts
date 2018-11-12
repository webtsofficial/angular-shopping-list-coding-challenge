import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
//import localeDe from '@angular/common/locales/de';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/sites/home/home.component';
import {ShoppingCardComponent} from './components/sites/shopping-card/shopping-card.component';
import {NavbarComponent} from './components/navigation/navbar/navbar.component';
import {ProductCardComponent} from './components/products/product-card/product-card.component';
import {ShoppingCartItemComponent} from './components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import {ShoppingCartModalComponent} from './components/shopping-cart/shopping-cart-modal/shopping-cart-modal.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';
import {ShoppingCardService} from "./services/shopping-card/shopping-card.service";
import { ShoppingCardOverlayComponent } from './components/shopping-cart/shopping-card-overlay/shopping-card-overlay.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ShoppingCardComponent,
        NavbarComponent,
        ProductCardComponent,
        ShoppingCartItemComponent,
        ShoppingCartModalComponent,
        ProductDetailsComponent,
        ShoppingCardOverlayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LazyLoadImagesModule
    ],
    providers: [
        ShoppingCardService
        /*{
            provide: LOCALE_ID,
            useValue: 'de-DE'
        }*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
