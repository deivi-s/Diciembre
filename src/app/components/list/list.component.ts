import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListClientsService } from 'src/app/service/list-clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  @Output() client = new EventEmitter<any>();

  clientList: any[] = [];
  constructor(private service: ListClientsService) {

  }
  ngOnInit(): void {
    this.service.clients.subscribe((client) => {
      this.clientList = client;
    })
  }

  eliminar(eliminar: any) {
    this.clientList = [...this.clientList].filter( (key) => key !== eliminar);
  }

  actualizar(cliente: any) {
    
    this.client.emit(cliente);
  }
}
