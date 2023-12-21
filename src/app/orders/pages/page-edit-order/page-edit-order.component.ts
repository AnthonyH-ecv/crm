import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent {
  order!: Order;
  isModalOpen = false;
  orderId: number;

  constructor(private ordersService: OrdersService, private activeRouter: ActivatedRoute, private router: Router) {
    this.orderId = Number(this.activeRouter.snapshot.paramMap.get('id'));
    if (this.orderId) {
      this.ordersService.getOrderById(this.orderId).subscribe((order) => this.order = order);
    }
  }

  onEdit(order: Order) {
    this.ordersService.putOrder(order).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  onOpenModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onDelete() {
    this.ordersService.deleteOrder(this.orderId).subscribe(() => this.router.navigate(['']));
  }
}
