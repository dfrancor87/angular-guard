import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonPanicoComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
