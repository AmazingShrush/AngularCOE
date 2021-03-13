import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SignupformComponent } from './signupform/signupform.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsListComponent},
  {path:'cart',component:CartComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'user',component:UserlistComponent},
  {path:'signup',component:SignupformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
