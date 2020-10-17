import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature1',
  template: `
    <div>
      <img src="../../assets/angular.png" width="50">
    </div>

    <h1><%= classify(name) %> Feature 1 Component!</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
