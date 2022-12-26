import { Component, EventEmitter, Output } from '@angular/core';
import { clippingParents } from '@popperjs/core';
import { ListClientsService } from 'src/app/service/list-clients.service';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent {
  listClients: any[] = [];  

  constructor(private service : ListClientsService) {

  }
  getClients(client: any) {
    this.listClients.push(client);
    this.service.clients.next(this.listClients);
  }
}
