import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(
    private router: Router,
    private webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.webApiService.obtenerUsuarios().subscribe((usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi);
  }

  public goToPosts() {
    this.router.navigate(['/posts']);
  }

  verPosts(idUsuario: number) {
    this.router.navigate(['/posts', 'usuario', idUsuario]);
  }

}
