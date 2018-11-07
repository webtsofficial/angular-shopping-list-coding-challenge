import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/sites/home/home.component";
import {ShoppingCardComponent} from "./components/sites/shopping-card/shopping-card.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping-cart', component: ShoppingCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
