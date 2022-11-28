import { Component } from '@angular/core';
import { tap, timer, take } from 'rxjs';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  timer$ = timer(0, 1000).pipe(
    take(11),
    tap((res) => {
      console.log(res);
    })
  );

  ngOnInit(): void {}
}
