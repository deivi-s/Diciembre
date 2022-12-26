import { Component, EventEmitter, Output } from '@angular/core';
import { clippingParents } from '@popperjs/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent {
  listClients: any[] = [];  
  getClients(client: any) {
    this.listClients.push(client);
  }
}
