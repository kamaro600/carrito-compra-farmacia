import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { PRODUCT_ROUTES } from './features/products/product.route';
import { InitialRedirectResolver } from './core/resolvers/initial-redirect.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: { redirect: InitialRedirectResolver },
    children: []
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
