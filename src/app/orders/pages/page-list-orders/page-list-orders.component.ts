import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from '../../../core/enums/state-order';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {
  orders$: Observable<Order[]>;
  states = Object.values(StateOrder);
  headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.orders$ = this.ordersService.getOrders();
  }

  onEdit(id: number) {
    this.router.navigate(['orders', 'edit', id]);
  }

  changeState(order: Order, event: Event) {
    const newState = (event.target as HTMLInputElement).value as StateOrder;
    const newOrder: Order = { ...order, state: newState };

    this.ordersService.putOrder(newOrder).subscribe((newOrder) => {
      Object.assign(order, newOrder);
    });
  }
}
