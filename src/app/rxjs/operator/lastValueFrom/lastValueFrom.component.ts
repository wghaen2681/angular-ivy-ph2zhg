import { Component } from '@angular/core';
import { interval, lastValueFrom, shareReplay } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lastValueFrom',
  templateUrl: './lastValueFrom.component.html',
  styleUrls: ['./lastValueFrom.component.scss'],
})
export class LastValueFromComponent {
  ngOnInit(): void {
    async function exLastValueFrom() {
      const source$ = interval(2000).pipe(take(10));
      const finalNumber = await lastValueFrom(source$);

      console.log(`The final number is ${finalNumber}`);
      return finalNumber;
    }

    exLastValueFrom();
  }
}
