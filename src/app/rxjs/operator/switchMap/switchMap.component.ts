import { Component } from '@angular/core';
import { interval, shareReplay, switchMap } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'switchMap',
  templateUrl: './switchMap.component.html',
  styleUrls: ['./switchMap.component.scss'],
})
export class SwitchMapComponent {
  source$ = interval(1000).pipe(take(8), shareReplay(2));

  ngOnInit(): void {
    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(2));

    /* When we use switchMap, if the second interval is incompleted and the new value is emitted from the first interval, it will unsubscirb the second interval and switch to handle the new request from the first interval.
     */
    firstInterval
      .pipe(
        switchMap((f) => {
          console.log(`Emission Corrected of first interval: ${f}`);
          return secondInterval;
        })
      )
      .subscribe((s) => console.log(s));
  }
}
