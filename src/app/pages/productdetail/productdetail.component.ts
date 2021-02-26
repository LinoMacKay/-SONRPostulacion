import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  products:Array<Product>;
  image:String;
  quantity:number = 0;
  constructor(private productService:ProductService,private route: ActivatedRoute,private orderService:OrderService,private matSnackBar:MatSnackBar,private router:Router) { }
  product:Product;
  ngOnInit(): void {
    var id = this.route.snapshot.params.id;
    this.product = this.productService.getProductBySKU(id);
    this.products = this.productService.getAllProducts();
    this.image = this.product.imgUrl;
  }

  UpdateImage(imageUrl:String){
    this.image = imageUrl;
  }

  AddToCart(){  
    
    if(this.quantity > 0){
      var orderToAdd = new Order();
      orderToAdd.sku = this.product.SKU;
      orderToAdd.quantity = this.quantity;
      orderToAdd.product = this.product
      orderToAdd.orderId = Guid.create().toString();

      this.orderService.createOrder(orderToAdd);
      this.router.navigate(['checkout']);
    }
    else{
      this.matSnackBar.open("Increase the quantity","Ok",{
        duration:2000
      })
    }

    
  }

}
