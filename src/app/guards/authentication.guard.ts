import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../services/authentification.service";

@Injectable({
  providedIn: 'root'
})
//c'est du service qui proteger votre systeme de routage  , mais il faut l'affecter a une route (voir app routing module)

export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authenticated=this.authService.isAuthenticated();
    if (authenticated==false)
       {
          this.router.navigateByUrl("login");
          return false;
       }
    else return true;

  }

}
