import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-panico',
  templateUrl: './boton-panico.component.html',
  styleUrls: ['./boton-panico.component.css']
})
export class BotonPanicoComponent implements OnInit {

  public enviado: boolean;

  constructor(
    private router: Router
  ) {
    this.enviado = false;
  }



  ngOnInit(): void {
  }
  public cerrar() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
