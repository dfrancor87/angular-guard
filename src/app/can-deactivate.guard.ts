import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface PuedeDesactivar {
  permitirSalirDeRuta: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<PuedeDesactivar> {

  canDeactivate(component: PuedeDesactivar) {
    // verifcar si la función "component.permitirSalirDeRuta"  está declarada en el componente
    // si está se ejecuta sino retorna True

    // if (component.permitirSalirDeRuta) {
    //   return component.permitirSalirDeRuta();
    // } else {
    //   return true;
    // }

    return component.permitirSalirDeRuta ? component.permitirSalirDeRuta() : true;
  }
}
