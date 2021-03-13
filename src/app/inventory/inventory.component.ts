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
  listLen:number;
  priceValue:number;
  constructor(private _productsData:ProductsDataService) { 
 
  }
  delete(index:number){
    this.invList.splice(index, 1);
    console.log(index)
   }
  ngOnInit() {
    this.invList=this._productsData.getList();
    this.listLen=this.invList.length;
  }


  receiveNum(event,i:number){
    this.priceValue=event;
    this.invList=this._productsData.changePrice(this.priceValue,i);
    console.log(this.priceValue);
  }
}
