import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: 'usuarios',
  //   loadChildren: () => import('./usuarios/usuarios.module').then(module => module.UsuariosModule)
  // },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule),
    canLoad: [CanActivateGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'panico',
    component: BotonPanicoComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
    // pathMatch: 'prefix'
  },

  // whildCard
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
