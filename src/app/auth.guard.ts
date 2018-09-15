import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private user: UserService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return this.auth.isLoggedIn;
  }
}
