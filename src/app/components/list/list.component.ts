import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input('clientList') clientList: any;

  clients: any[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
