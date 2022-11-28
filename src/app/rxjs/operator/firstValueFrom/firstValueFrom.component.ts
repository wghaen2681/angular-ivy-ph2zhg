import { Component } from '@angular/core';
import { firstValueFrom, interval, shareReplay } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'firstValueFrom',
  templateUrl: './firstValueFrom.component.html',
  styleUrls: ['./firstValueFrom.component.scss'],
})
export class FirstValueFromComponent {
  ngOnInit(): void {
    async function exFirstValueFrom() {
      const source$ = interval(2000).pipe(take(10));
      const firstNumber = await firstValueFrom(source$);

      console.log(`The first number is ${firstNumber}`);
      return firstNumber;
    }

    exFirstValueFrom();
  }
}
