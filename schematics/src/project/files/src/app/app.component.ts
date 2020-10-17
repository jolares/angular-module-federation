import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1><%= classify(name) %> AppComponent</h1>

    <p><%= classify(name) %> AppComponent router-outlet below:</p>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
