import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { PriceUpdaterComponent } from './inventory/price-updater/price-updater.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './login.service';
import { UserlistComponent } from './userlist/userlist.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InventoryComponent,
    PriceUpdaterComponent,
    HeaderComponent,
    UserlistComponent,
    SignupformComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ProductsDataService,
  {provide:BigBasketDataService,useClass:BigBasketDataService},
  {provide:AmazonDataService,useClass:AmazonDataService},
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
