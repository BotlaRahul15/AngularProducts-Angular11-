import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsFormComponent } from './product-details/product-details-form/product-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProductDetailsComponent,AppComponent]
})
export class AppModule { }
