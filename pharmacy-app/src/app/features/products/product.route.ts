import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        loadComponent: () => import('./components/listproduct/listproduct.component').then(m => m.ListproductComponent),
    }
];
