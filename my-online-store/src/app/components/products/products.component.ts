import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/global/rest.service';
import { Product } from 'src/app/models/rest/product';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'mos-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public message: string;
  public products: Product[];

  constructor(private rest: RestService, private store: StoreService) { }

  ngOnInit(): void {
    this.message = 'We are loading your information';
    this.getProductsList();
  }

  private getProductsList(): void {
    this.rest.getListProducts().subscribe((products) => {
      if (products.products && products.products.length > 0) {
        this.products = products.products;
      }
    }, (errorProducts) => {
      this.message = 'Oops! We cannot load your information.';
      console.error(errorProducts);
    });
  }

  public buyProduct(product: Product): void {
    this.store.addProduct(product);
  }
}
