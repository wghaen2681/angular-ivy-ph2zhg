import { Component } from '@angular/core';
import { tap, take, interval } from 'rxjs';

@Component({
  selector: 'interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  interval$ = interval(1000).pipe(
    take(10),
    tap((res) => {
      console.log('res = ', res);
    })
  );

  ngOnInit(): void {}
}
