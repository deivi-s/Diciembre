import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListClientsService } from 'src/app/service/list-clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  clientList: any[] = [];
  constructor(private service: ListClientsService) {

  }
  ngOnInit(): void {
    this.service.clients.subscribe((client) => {
      this.clientList = client;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  eliminar(eliminar: any) {
    this.clientList = this.clientList.filter( (key) => key !== eliminar);
  }
}
