import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/rest/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private productBuyList: Product[];

  constructor() {
    this.productBuyList = [];
  }

  /**
   * @description This function allows adding an object of type Product.
   * @param {Product} product
   * @memberof StoreService
   */
  public addProduct(product: Product): void {
    this.productBuyList.push(product);
  }

  /**
   * @description This function allows to get a list of products.
   * @returns {Product[]}
   * @memberof StoreService
   */
  public getProducts(): Product[] {
    return this.productBuyList;
  }

  /**
   * @description This functions allows to delete a product by id.
   * @param {Product} product
   * @returns {Product[]}
   * @memberof StoreService
   */
  public deleteProduct(product: Product): Product[] {
    this.productBuyList = this.productBuyList.filter((item) => {
      return item.id !== product.id;
    });
    console.log(this.productBuyList);
    return this.productBuyList;
  }
}
