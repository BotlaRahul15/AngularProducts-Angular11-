import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product-detail.model';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public service: ProductDetailService) { }
  ngOnInit() {
    this.service.refreshlist();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Product();
  }
  populateForm(selectedRecord: Product) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('are you sure to delete this record ?')) {
      debugger;
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          this.service.refreshlist();
        },
          err => { console.log(err); })
    }
  }

}
