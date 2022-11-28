import { Component } from '@angular/core';
import { Observable, tap, of } from 'rxjs';

@Component({
  selector: 'of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent {
  of$: Observable<number[]> = of([1, 2, 3, 4]);

  ngOnInit(): void {
    this.of$
      .pipe(
        tap((res) => {
          console.log('res = ', res);
        })
      )
      .subscribe();
  }
}
