import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkoutcard',
  templateUrl: './checkoutcard.component.html',
  styleUrls: ['./checkoutcard.component.scss']
})
export class CheckoutcardComponent implements OnInit {

  Orders:Array<Order>;
  constructor(private orderService:OrderService) { }
  subtotal:number = 0;
  total:number ;
  ngOnInit(): void {
    this.Orders = this.orderService.getAllOrders();
    this.GetSubtotal(this.Orders);
  }
  GetSubtotal(data){
    this.subtotal = 0;
    for(var order of data){
      this.subtotal += order.quantity * order.product.priceWithOutTaxes
    }
    this.total = this.subtotal
  }

}
