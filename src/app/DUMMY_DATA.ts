import { Product } from "./model/product";
import { ProductCategory } from "./model/productCategory";


export var Categories : Array<ProductCategory>=[ {id:1,name:"Type1"} ,{id:2,name:"Type2"} ,{id:3,name:"Type3"} ];


export const Products :  Array<Product> = [{
   SKU:"1",name:"Product 1",
   description:"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, p..",
   Stock:200,
   brand:"Hewlett Package",
   imgUrl:"assets/products/product-1.jpg",
   priceWithTaxes:350,
   priceWithOutTaxes:320,
   categoryId:1
},
{
    SKU:"2",name:"Product 2",
    description:"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, p..",
    Stock:10,
    brand:"Hewlett Package",
    imgUrl:"assets/products/product-2.jpg",
    priceWithTaxes:380,
    priceWithOutTaxes:330,
    categoryId:2
 },
 {
    SKU:"3",name:"Product 3",
    description:"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, p..",
    Stock:200,
    brand:"Hewlett Package",
    imgUrl:"assets/products/product-3.jpg",
    priceWithTaxes:350,
    priceWithOutTaxes:320,
    categoryId:3
 },
 {
    SKU:"4",name:"Product 4",
    description:"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, p..",
    Stock:20,
    brand:"Hewlett Package",
    imgUrl:"assets/products/product-4.jpg",
    priceWithTaxes:500,
    priceWithOutTaxes:320,
    categoryId:2
 },
 {
    SKU:"5",name:"Product 5",
    description:"Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, p..",
    Stock:200,
    brand:"Hewlett Package",
    imgUrl:"assets/products/product-5.jpg",
    priceWithTaxes:350,
    priceWithOutTaxes:320,
    categoryId:1
 },]