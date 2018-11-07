import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/sites/home/home.component';
import { ShoppingCardComponent } from './components/sites/shopping-card/shopping-card.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ShoppingCartItemComponent } from './components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartModalComponent } from './components/shopping-cart/shopping-cart-modal/shopping-cart-modal.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import {HttpClientModule} from "@angular/common/http";
import {LazyLoadImagesModule} from "ngx-lazy-load-images";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCardComponent,
    NavbarComponent,
    ProductCardComponent,
    ShoppingCartItemComponent,
    ShoppingCartModalComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
