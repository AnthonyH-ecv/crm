import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent {
  protected readonly client = new Client();

  constructor(private clientsService: ClientsService, private router: Router) {
  }

  onAdd(client: Client) {
    this.clientsService.postClient(client).subscribe(() =>{
      this.router.navigate(['clients'])
    })
  }
}
