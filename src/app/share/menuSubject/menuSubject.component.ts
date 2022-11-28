import { Component, Input } from '@angular/core';

@Component({
  selector: 'menuSubject',
  templateUrl: './menuSubject.component.html',
  styleUrls: ['./menuSubject.component.scss'],
})
export class MenuSubjectComponent {
  constructor() {}

  @Input()
  dataSubject;

  ngOnInit(): void {}
}
