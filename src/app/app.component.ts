import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}

  public closeAllSelector$ = new BehaviorSubject<boolean>(true);

  breadcrumbLink = [
    {
      level: 1,
      link: '/',
      text: 'Home',
    },
    {
      level: 2,
      link: '/index',
      text: 'Index',
      showSelector: false,
      options: [
        {
          level: 2,
          link: '/operator',
          text: 'Operator',
        },
      ],
    },
  ];

  closeAllSelector() {
    this.closeAllSelector$.next(true);
  }
}
