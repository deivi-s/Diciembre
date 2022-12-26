import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  @Output() clients = new EventEmitter<any>();

  listClient: any[] = [];
  clientForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      comentario: new FormControl('')
    });

  disabled = true;

  constructor() { }

  enviar(client: any) {
   this.clients.emit(client);
  } 
}
