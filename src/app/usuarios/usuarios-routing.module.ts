import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PostsComponent } from '../posts/components/posts/posts.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuariosListadoComponent } from './components/usuarios-listado/usuarios-listado.component';



const routes: Routes = [
  {
    path: 'usuarios', component: UsuariosComponent,
    children: [
      {
        path: '',
        component: UsuariosListadoComponent
      },
      {
        path: ':id',
        component: UsuarioDetalleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
