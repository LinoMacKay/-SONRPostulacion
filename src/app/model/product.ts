import { DecimalPipe } from "@angular/common";
import { ProductCategory } from "./productCategory";

export class Product{
    name:String;
    description:String;
    priceWithTaxes:number;
    priceWithOutTaxes:number;
    brand:String;
    SKU:String;
    Stock:number;
    imgUrl:String;
    categoryId:number
}