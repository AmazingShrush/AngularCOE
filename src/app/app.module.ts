import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { MenuComponent } from './menu/menu.component';
import { ProductsDataService } from './products-data.service';
import { InventoryComponent } from './inventory/inventory.component';
import { BigBasketDataService } from './big-basket-data.service';
import { AmazonDataService } from './amazon-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ProductsDataService,
  {provide:BigBasketDataService,useClass:BigBasketDataService},
  {provide:AmazonDataService,useClass:AmazonDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
