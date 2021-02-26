import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../model/order';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  private storageSub= new Subject<String>();

  Orders : Array<Order> = new Array<Order>();

  createOrder(addingOrder:Order){
    var OrdersInLocalStorage :Array<Order> = JSON.parse(localStorage.getItem('orders'))

    if(OrdersInLocalStorage == null){

      this.Orders.push(addingOrder)
      localStorage.setItem('orders',JSON.stringify(this.Orders))
      this.storageSub.next("changed")

    }
    else {
      if(OrdersInLocalStorage.length > 0){
        this.Orders = OrdersInLocalStorage
        


          this.Orders.push(addingOrder)
        

        localStorage.setItem('orders',JSON.stringify(this.Orders))
        this.storageSub.next("changed")


      }
      else{
        this.Orders.push(addingOrder)
        localStorage.setItem('orders',JSON.stringify(this.Orders))
        this.storageSub.next("changed")

      }
      



    }
    

  }


  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  getAllOrders(){
    if(localStorage.getItem('orders')){
     return this.Orders = JSON.parse(localStorage.getItem('orders'));
    }
    else{
      return this.Orders;
    }

  }
  deleteOrderById(id:String):Array<Order> {
    this.Orders = this.Orders.filter(item => item.orderId !== id);
    localStorage.setItem('orders',JSON.stringify(this.Orders))

    return this.Orders
  }

  DeleteAllOrders(){
    localStorage.setItem('orders',JSON.stringify([]))
    this.storageSub.next("changed")
  }
}
