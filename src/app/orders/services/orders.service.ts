import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl= 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseUrl}/orders`)
  }
}
