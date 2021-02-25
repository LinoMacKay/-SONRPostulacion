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

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    BottombarComponent,
    ContactComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
