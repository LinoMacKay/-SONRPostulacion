import { Injectable } from '@angular/core';
import {Products,Categories} from '../DUMMY_DATA';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  

  constructor() { }


  getAllProducts() : Array<Product>{
    return Products;
  }

  getProductBySKU(SKU:String):Product  {
   var Product =  Products.filter((product)=>{
       return product.SKU == SKU;
     })
     return Product[0];

  }

}
