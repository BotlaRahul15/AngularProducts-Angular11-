import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product-detail.model';
import { NgForm } from '@angular/forms';
import { ProductDetailService } from '../../shared/product-detail.service';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.css']
})
export class ProductDetailsFormComponent implements OnInit {

  constructor(public service: ProductDetailService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Product();
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.productID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
      },
      err => { console.log(err); }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
      },
      err => {
        console.log(err);
      }
    )
  }

}
