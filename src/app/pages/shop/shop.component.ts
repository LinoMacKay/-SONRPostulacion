import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  grid:boolean=true;
  constructor(private productService:ProductService) { }
  products:Product[];
  isList : boolean = true;
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
