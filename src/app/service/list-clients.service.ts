import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListClientsService {
  clients: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  listClients(){

  }
}
