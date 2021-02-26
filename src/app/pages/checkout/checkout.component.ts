import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService:OrderService,private matSnackBar:MatSnackBar) { }
  dataSource = new MatTableDataSource();
  subtotal:number = 0;
  total:number ;
  displayedColumns: string[] = ['image', 'product', 'price', 'quantity','total','actions'];
  ngOnInit(): void {
    this.dataSource.data = this.getData();
    this.GetSubtotal( this.getData());
    this.orderService.watchStorage().subscribe(()=>{
      this.dataSource.data = this.getData();
     
    })
  }

  DeleteOrder(id:String){
    this.dataSource.data = this.orderService.deleteOrderById(id);
    this.GetSubtotal( this.getData());

  }


  getData(){
    return this.orderService.getAllOrders();
  }

  GetSubtotal(data){
    this.subtotal = 0;
    for(var order of data){
      this.subtotal += order.quantity * order.product.priceWithOutTaxes
    }
    this.total = this.subtotal
  }
 
  Pay(){
    this.orderService.DeleteAllOrders();
    this.subtotal = 0;
    this.total = 0;
    this.matSnackBar.open("Thanks for purchasing","Ok",{
      duration:2000
    })
  }

}
