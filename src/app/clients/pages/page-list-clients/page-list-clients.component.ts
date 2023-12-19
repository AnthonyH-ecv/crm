import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {
  clients$ : Observable<Client[]>
  headers: string[] = [
  'Name',
  'Comment',
  'State',
  'Tva',
  'TotalCaHt'
  ];

  constructor(private clientService: ClientsService) {
    this.clients$ = this.clientService.getClient()
  }

}
