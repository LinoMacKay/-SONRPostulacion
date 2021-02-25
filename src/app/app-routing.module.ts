import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { ShopComponent } from './pages/shop/shop.component';


const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'product-detail/:id',component:ProductdetailComponent},
  {path:'shop',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
