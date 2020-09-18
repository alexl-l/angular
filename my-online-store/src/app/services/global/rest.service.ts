import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/rest/products';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private constant: ConstantsService, private http: HttpClient) { }

  public getListProducts(): Observable<Products> {
    return this.http.get<Products>(this.constant.getUrlProductsList());
  }

  public getBanner(): Observable<any> {
    return this.http.get<any>('https://demo7146954.mockable.io/msg');
  }
}
