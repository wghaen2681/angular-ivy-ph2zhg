import { Component } from '@angular/core';
import { interval, shareReplay } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'shareReplay',
  templateUrl: './shareReplay.component.html',
  styleUrls: ['./shareReplay.component.scss'],
})
export class ShareReplayComponent {
  source$ = interval(1000).pipe(take(8), shareReplay(2));

  ngOnInit(): void {
    this.source$.subscribe((data) => {
      console.log(`shareReplay 示範 第一次訂閱: ${data}`);
    });

    setTimeout(() => {
      this.source$.subscribe((data) => {
        console.log(`shareReplay 示範 第二次訂閱: ${data}`);
      });
    }, 5000);
  }
}
