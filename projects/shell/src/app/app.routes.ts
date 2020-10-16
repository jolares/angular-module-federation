import { Routes } from '@angular/router';

import { Feature1Component } from './feature1/feature1.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: Feature1Component,
    pathMatch: 'full'
  },
  {
    path: 'mf1-routes',
    loadChildren: () => import('mf1/Module').then(m => m.AppModule)
  },
  {
    path: 'mf2-routes',
    loadChildren: () => import('mf2/Module').then(m => m.AppModule)
  }
];

