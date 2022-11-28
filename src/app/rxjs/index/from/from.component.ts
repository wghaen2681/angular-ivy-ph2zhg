import { Component } from '@angular/core';
import { Observable, tap, from } from 'rxjs';

@Component({
  selector: 'from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent {
  from$: Observable<number> = from([5, 6, 7, 8]);

  ngOnInit(): void {
    this.from$
      .pipe(
        tap((res) => {
          console.log('res = ', res);
        })
      )
      .subscribe();
  }
}
