import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'about-us',component:AboutUsComponent},
  {path: 'payment-details', component:PaymentDetailsComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


