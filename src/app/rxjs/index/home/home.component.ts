import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  dataSubject = [
    {
      link: '/index',
      text: 'Index',
      child: [
        {
          link: './empty',
          text: 'empty',
        },
        {
          link: './from',
          text: 'from',
        },
        {
          link: './interval',
          text: 'interval',
        },
        {
          link: './of',
          text: 'of',
        },
        {
          link: './timer',
          text: 'timer',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
