import { Routes } from '@angular/router';

import { Feature1Component } from './modules/feature1/feature1.component';


export const APP_ROUTES: Routes = [
	{ path: '', component: Feature1Component, pathMatch: 'full'},
];
