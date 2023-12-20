import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent{
  order!: Order
  private orderId: number;

  constructor(private ordersService: OrdersService, private activeRouter: ActivatedRoute, private router: Router) {
    this.orderId = Number(this.activeRouter.snapshot.paramMap.get('id'))
    if(this.orderId) {
      this.ordersService.getOrderById(this.orderId).subscribe((order)=> this.order = order)
    }
  }
  onEdit(order: Order) {
    this.ordersService.putOrder(order).subscribe(() =>{
      this.router.navigate([''])
    })
  }
}
