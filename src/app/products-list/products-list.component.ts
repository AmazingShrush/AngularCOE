import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
   prodList=[];
   isAdmin=true;
  constructor(private _productsData: ProductsDataService) { }

   delete(index:number){
    this.prodList.splice(index, 1);
    console.log(index)
   }

 public getList(){
    return this.prodList;
  }
  ngOnInit() {
    this.prodList=this._productsData.getList();
  }

}
