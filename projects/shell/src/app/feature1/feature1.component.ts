import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1',
  styleUrls: ['./feature1.component.scss'],
  template: `
    <div class="component-container">
      <h1>Shell Feat-1 Component</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feature1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
