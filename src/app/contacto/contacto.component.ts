import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuedeDesactivar } from '../can-deactivate.guard';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, PuedeDesactivar {

  public mensaje: string;
  public enviado: boolean;

  constructor() {
    this.enviado = false;
  }


  ngOnInit(): void {
  }

  public enviar() {
    alert('Mensaje enviado: ' + this.mensaje);
    this.enviado = true;
  }

  permitirSalirDeRuta(): boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    if (!this.mensaje || this.enviado) {
      return true;
    }

    const confirmacion = window.confirm('¿Quieres salir del formulario y perder los cambios realizados?');
    return confirmacion;
  }


}
