import { Component } from '@angular/core';
import { combineLatest, of, from } from 'rxjs';

@Component({
  selector: 'combineLatest',
  templateUrl: './combineLatest.component.html',
  styleUrls: ['./combineLatest.component.scss'],
})
export class CombineLatestComponent {
  combineLatest$ = combineLatest([of(1, 2, 3, 4), from([5, 6, 7, 8])]);

  ngOnInit(): void {}
}
