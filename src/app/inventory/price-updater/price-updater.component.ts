import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price-updater',
  templateUrl: './price-updater.component.html',
  styleUrls: ['./price-updater.component.scss']
})
export class PriceUpdaterComponent implements OnInit {
 @Input() priceValue:number;
  constructor() { }
  @Output() messageEvent = new EventEmitter<number>();
  ngOnInit() {
  }

  update(){
    this.messageEvent.emit(this.priceValue);
  }
}
