import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/client.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent {
  client!: Client
  clientId: number;
  isModalOpen = false;


  constructor(private clientsService: ClientsService, private activeRouter: ActivatedRoute, private router: Router) {
    this.clientId = Number(this.activeRouter.snapshot.paramMap.get('id'))
    if(this.clientId) {
      this.clientsService.getClientById(this.clientId).subscribe((client)=> this.client = client)
    }
  }
  onEdit(client: Client) {
    this.clientsService.putOrder(client).subscribe(() =>{
      this.router.navigate(['clients'])
    })
  }

  onDelete() {
    this.clientsService.deleteClient(this.clientId).subscribe(() => {
      this.router.navigate(['clients'])
    })
  }

  onOpenModal() {
    console.log('open')
    this.isModalOpen = !this.isModalOpen;
  }
}
