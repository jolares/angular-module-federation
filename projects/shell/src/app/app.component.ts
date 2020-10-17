import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app-root project-container">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="over">
          <ng-container *ngTemplateOutlet="sideNavContent"></ng-container>
        </mat-sidenav>

        <mat-sidenav-content>
          <button mat-button (click)="sidenav.toggle()">SideNav</button>
          <ng-container *ngTemplateOutlet="pageContent"></ng-container>
        </mat-sidenav-content>
      </mat-sidenav-container>

      <ng-template #sideNavContent>
        <ul>
          <li>
            <button mat-button (click)="sidenav.toggle()">Close</button>
          </li>
          <li><a routerLink="/">Shell-Feat-1 Component</a></li>
          <li><a routerLink="/mf1-routes">MF1-AppComponent</a></li>
          <li><a routerLink="/mf1-routes/feature-1">MF1-Feat-1 Component</a></li>
          <li><a routerLink="/mf1-routes/feature-2">MF1-Feat-2 Component</a></li>
          <li><a routerLink="/mf1-routes/feature-3-routes">MF1-Feat-3-SubModule Component</a></li>
          <li><a routerLink="/mf2-routes">MF2-Feat-1 Component</a></li>
        </ul>
      </ng-template>

      <ng-template #pageContent>
        <p>Shell Feature1Component's router-outlet below:</p>
        <router-outlet></router-outlet>
      </ng-template>
    </div>
  `,
  encapsulation: ViewEncapsulation.None, // only for AppComponent
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'shell';
}

