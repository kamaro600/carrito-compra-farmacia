import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const InitialRedirectResolver: ResolveFn<void> = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.isAuthenticated();

  if (user) {
    router.navigate(['/products']);
  } else {
    router.navigate(['/auth/login']);
  }
};
