import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>MF2 AppComponent</h1>

    <p>MF2 AppComponent router-outlet below:</p>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
