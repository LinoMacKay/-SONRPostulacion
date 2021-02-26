import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Review } from 'src/app/model/review';
import { ProductService } from 'src/app/service/product.service';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    "(window:resize)":"onWindowResize($event)"
  }
})
export class HomeComponent implements OnInit {
  width:number = window.innerWidth;
  cellToShow:number;
  constructor( private productService:ProductService,private reviewService:ReviewService) { }
  products:Product[];
  reviews:Review[];
  ngOnInit(): void {
    
    if(this.width < 1250 && this.width > 850){
      console.log("1250")
      this.cellToShow = 2;
    }
    else if(this.width < 850){
      console.log("850")

      this.cellToShow = 1
    }
    else{
      this.cellToShow = 3

    }
    this.products = this.productService.getAllProducts();
    this.reviews = this.reviewService.getAllReviews();
  }

  onWindowResize(event) {
    
    this.width = event.target.innerWidth;
    if(this.width < 1250 && this.width > 850){
      console.log("1250")
      this.cellToShow = 2;
    }
    else if(this.width < 850){
      console.log("850")

      this.cellToShow = 1
    }
    else{
      this.cellToShow = 3

    }
  }

 

}
