import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {

  protected readonly order = new Order();

   constructor(private ordersService: OrdersService, private router: Router) {
   }

  onAdd(order: Order) {
    this.ordersService.postOrder(order).subscribe(() =>{
      this.router.navigate([''])
    })
  }
}
