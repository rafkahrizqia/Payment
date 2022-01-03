import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsFormComponent } from './about-us/about-us-form/about-us-form.component';
import { PaymentDetailService } from './shared/payment-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailFormComponent,
    PaymentDetailsComponent,
    AboutUsComponent,
    AboutUsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
