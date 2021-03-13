import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  prodList=[
    {"id":1,"name":"BT21: Chimmy Soft Toy","price":1000,"category":"Toys","imagePath":"assets/images/chimmy.jpg"},
    {"id":2,"name":"BTS: Love Yourself Album","price":3000,"category":"DVD","imagePath":"assets/images/btsloveyourself.png"},
    {"id":3,"name":"BT21: Tata Soft Toy","price":1000,"category":"Toys","imagePath":"assets/images/tata.jpg"},
    {"id":4,"name":"Sakura Sheet Mask","price":100,"category":"Cosmetics","imagePath":"assets/images/sakura.jpeg"},
    {"id":5,"name":"Red Lipstick","price":2000,"category":"Cosmetics","imagePath":"assets/images/lipstick.jpg"},
    {"id":6,"name":"BT21: Mang Soft Toy","price":1000,"category":"Toys","imagePath":"assets/images/mang.jpg"},
    {"id":7,"name":"One Direction: MITAM","price":3000,"category":"DVD","imagePath":"assets/images/mitam.jpg"},
    {"id":8,"name":"BT21: Koya Soft Toy","price":1000,"category":"Toys","imagePath":"assets/images/koya.jpg"},
    {"id":9,"name":"BTS: BE Essential Edition","price":2400,"category":"DVD","imagePath":"assets/images/be.jpg"},
    {"id":10,"name":"BT21: Kooky Soft Toy","price":1000,"category":"Toys","imagePath":"assets/images/kooky.jpg"},

  ];


  getList(){
    return this.prodList;
  }

  changePrice(val:number,index:number){
    this.prodList[index].price=val;
    return this.prodList;
  }

  constructor() { }
}
