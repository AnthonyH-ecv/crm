import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {
  clients$: Observable<Client[]>;
  headers: string[] = [
    'Name',
    'Comment',
    'State',
    'Tva',
    'TotalCa HT',
    'Total TTC'
  ];

  constructor(private clientService: ClientsService, private router: Router) {
    this.clients$ = this.clientService.getClients();
  }

  onEdit(id: number) {
    this.router.navigate(['clients', 'edit',id])
  }
}
