import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';


const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'product-detail/:id',component:ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
