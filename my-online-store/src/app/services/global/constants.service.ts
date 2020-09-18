import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private text1 = 'Hola';
  private text2 = 'mundo.';
  private text3 = 'Esto';
  private text4 = 'es';
  private text5 = 'un';
  private text6 = 'curso';
  private text7 = 'de';
  private text8 = 'Angular.';

  constructor() {
    console.log(this.concatValues1());
    console.log(this.concatValues2());
  }

  public getUrlProductsList(): string {
    return `${environment.baseUrl}productsList`;
  }


  public getUrlProductsList2(): string {
    return environment.baseUrl + 'productsList';
  }

  private concatValues1(): string {
    return `${this.text1} ${this.text2} ${this.text3} ${this.text4} ${this.text5} ${this.text6} ${this.text7} ${this.text8}`;
  }

  private concatValues2(): string {
    return this.text1 + ' ' + this.text2 + ' ' + this.text3 + ' ' + this.text4 + ' ' + this.text5 + ' ' + this.text6 + ' ' + this.text7 + ' ' + this.text8;
  }
}
