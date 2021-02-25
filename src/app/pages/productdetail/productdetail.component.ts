import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  products:Array<Product>;
  image:String;
  constructor(private productService:ProductService,private route: ActivatedRoute) { }
  product:Product;
  ngOnInit(): void {
    var id = this.route.snapshot.params.id;
    this.product = this.productService.getProductBySKU(id);
    this.products = this.productService.getAllProducts();
    this.image = this.product.imgUrl;
    console.log(this.products)
  }

  UpdateImage(imageUrl:String){
    this.image = imageUrl;
  }

}
