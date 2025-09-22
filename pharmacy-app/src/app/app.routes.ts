import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { PRODUCT_ROUTES } from './features/products/product.route';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
     children: AUTH_ROUTES
  },
  {
    path: 'products',
    children: PRODUCT_ROUTES
  }, 
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/components/cart-list/cart-list.component').then(m => m.CartListComponent)
  },
   {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
   {
    path: '**',
    redirectTo: '/auth/login'
  },
];
