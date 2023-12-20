import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url = 'http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url);
  }

  postClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client);
  }

  getClientById(clientId: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/${clientId}`);
  }

  putOrder(client: Client):  Observable<Client> {
    return this.httpClient.put<Client>(`${this.url}/${client.id}`,client)
  }
}
