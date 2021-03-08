import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  invList=[];
  isAdmin=true;

  constructor(private _productsData:ProductsDataService) { }
  delete(index:number){
    this.invList.splice(index, 1);
    console.log(index)
   }
  ngOnInit() {
    this.invList=this._productsData.getList();
  }

}
