import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppbarComponent } from './pages/appbar/appbar.component';
import { CustomMaterialModule } from './material.module';
import { BottombarComponent } from './pages/bottombar/bottombar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from "@angular/common";
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { AvaiabilityPipe } from './pipes/avaiability.pipe';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductcardComponent } from './pages/shop/productcard/productcard.component';
import { ProductlistComponent } from './pages/shop/productlist/productlist.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    BottombarComponent,
    ContactComponent,
    ProductdetailComponent,
    AvaiabilityPipe,
    ShopComponent,
    ProductcardComponent,
    ProductlistComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
