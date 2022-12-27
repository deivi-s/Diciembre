import { Component, EventEmitter, Output, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Output() clients = new EventEmitter<any>();

  @Input() dataClient: any = '';


  listClient: any[] = [];
  clientForm: FormGroup;

  disabled = true;

  constructor() {

    this.clientForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      comentario: new FormControl('')
    });
  }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void{
    this.clientForm = new FormGroup({
      nombre: new FormControl(this.dataClient?.nombre, Validators.required),
      edad: new FormControl(this.dataClient?.edad, Validators.required),
      sexo: new FormControl(this.dataClient?.sexo, Validators.required),
      comentario: new FormControl(this.dataClient?.comentario)
    });
  }

  enviar(client: any) {
    this.clients.emit(client);
  }
}
