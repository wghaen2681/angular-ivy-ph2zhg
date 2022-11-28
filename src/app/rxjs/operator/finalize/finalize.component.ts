import { Component } from '@angular/core';
import { finalize, EMPTY } from 'rxjs';

@Component({
  selector: 'finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss'],
})
export class FinalizeComponent {
  ngOnInit(): void {
    EMPTY.pipe(
      finalize(() => {
        console.log(`It's finalize!`);
      })
    ).subscribe();
  }
}
