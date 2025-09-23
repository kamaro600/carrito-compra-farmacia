import { Injectable } from '@angular/core';
import { CanActivate, Router ,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      // si la URL es raíz, mando a products
      if (state.url === '/' || state.url === '') {
        return false;
      }
      return true;
    }

    // no logueado → login
    this.router.navigate(['/auth/login']);
    return false;
  }
}