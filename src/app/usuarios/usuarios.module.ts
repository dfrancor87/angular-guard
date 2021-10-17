import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosListadoComponent } from './components/usuarios-listado/usuarios-listado.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosListadoComponent,
    UsuarioDetalleComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
