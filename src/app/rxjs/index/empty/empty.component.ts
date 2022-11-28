import { Component } from '@angular/core';
import { Observable, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent {
  empty$: Observable<null> = EMPTY;

  ngOnInit(): void {
    this.empty$
      .pipe(
        tap((res) => {
          console.log('res = ', res);
        })
      )
      .subscribe();
  }
}
