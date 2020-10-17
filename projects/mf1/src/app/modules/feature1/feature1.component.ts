import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature1',
  template: `
    <div class="component-container">
      <img src="../../assets/angular.png" width="50">

      <h1>MF1 Feature 1 Component!</h1>

      <p>
        <a routerLink="/feature-2">Go to Feat-2</a>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
