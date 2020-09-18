import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { Product } from 'src/app/models/rest/product';

@Component({
  selector: 'mos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productsList: Product[];
  public state: boolean;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.state = true;
    this.productsList = this.store.getProducts();
  }

  public deleteItem(product: Product): void {
    this.state = false;
    this.productsList = this.store.deleteProduct(product);
    this.state = true;
    console.log(this.productsList);
  }
}
