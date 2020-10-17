import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import { APP_ROUTES } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
