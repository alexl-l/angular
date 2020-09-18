import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/rest/product';

@Component({
  selector: 'mos-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  @Output() emitter: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public emitCard(product: Product): void {
    this.emitter.emit(product);
  }
}
