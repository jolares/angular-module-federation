import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>MF1 AppComponent</h1>

    <p>MF1 AppComponent router-outlet below:</p>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}