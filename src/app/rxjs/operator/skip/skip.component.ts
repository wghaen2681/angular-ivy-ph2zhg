import { Component } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent {
  ngOnInit(): void {
    interval(1000)
      .pipe(skip(3), take(7))
      .subscribe((data) => {
        console.log(`skip 示範： ${data}`);
      });

    // (訂閱後的 0, 1, 2 會被忽略)
    // skip 示範： 3
    // skip 示範： 4
    // skip 示範： 5
    // ...
  }
}
