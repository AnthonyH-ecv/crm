import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'http://localhost:3000/orders';

  constructor(private httpClient: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url);
  }

  postOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.url, order);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.url}/${orderId}`);
  }

  putOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.url}/${order.id}`, order);
  }
}
