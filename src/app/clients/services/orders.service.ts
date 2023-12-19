import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl= 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getClient(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}/clients`)
  }
}
