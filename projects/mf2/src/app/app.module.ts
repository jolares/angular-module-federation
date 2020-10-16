import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';

import { Feature1Component } from './modules/feature1/feature1.component';

import { APP_ROUTES } from './app.routes';



@NgModule({
  imports: [
    BrowserModule,
    MatTableModule,
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    Feature1Component,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
