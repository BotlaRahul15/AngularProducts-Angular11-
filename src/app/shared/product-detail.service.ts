import { Product } from './product-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  


  formData: Product = new Product();
  readonly baseURL = 'https://localhost:44384/api/Product/Get';
  readonly baseURLGet = 'https://localhost:44384/api/Product/Get';
  readonly baseURLCreate = 'https://localhost:44384/api/Product/Create';
  readonly baseURLDelete = 'https://localhost:44384/api/Product/Delete?id=';
  readonly baseURLUpdate = 'https://localhost:44384/api/Product/Update';
  list: Product[] | undefined;;

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.baseURLCreate, this.formData);
  }
  putPaymentDetail() {
    //return this.http.put(`${this.baseURLUpdate}/${this.formData.productID}`, this.formData);
    return this.http.put(this.baseURLUpdate, this.formData);
  }
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURLDelete}${id}`);
  }

  refreshlist() {
    this.http.get(this.baseURLGet)
      .toPromise()
      .then(res => this.list = res as Product[]);
  }
}
