import { Component } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  ngOnInit(): void {
    // 发出 (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);

    // 过滤掉奇数
    const example = source.pipe(filter((num) => num % 2 === 0));

    // 输出: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe((val) =>
      console.log(`Even number: ${val}`)
    );
  }
}
