import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface breadcrumbLinkUnitType {
  level: number;
  link: string;
  text: string;
  showSelector?: boolean;
}

export interface breadcrumbLinkType extends breadcrumbLinkUnitType {
  options?: breadcrumbLinkUnitType[];
}

@Component({
  selector: 'breadCrumb',
  templateUrl: './breadCrumb.component.html',
  styleUrls: ['./breadCrumb.component.scss'],
})
export class BreadCrumbComponent {
  constructor(public router: Router) {}

  private _breadcrumbLink: breadcrumbLinkType[];

  @Input()
  set breadcrumbLink(value: breadcrumbLinkType[]) {
    this._breadcrumbLink = value;
  }

  get breadcrumbLink() {
    return this._breadcrumbLink;
  }

  @Input()
  closeAllSelector$: BehaviorSubject<boolean>;

  toActivePage(
    desigLink: { level: number; link: string; text: string },
    isLast: boolean
  ) {
    if (isLast) {
      this.breadcrumbLink.forEach((el) => {
        if (el.level !== desigLink.level) return;

        el.showSelector = !el.showSelector;
      });
    } else {
      let newBreadCrumbLink: breadcrumbLinkType[] = [];

      for (let el of this.breadcrumbLink) {
        if (el.level <= desigLink.level) {
          newBreadCrumbLink.push(el);
        } else {
          this.breadcrumbLink = newBreadCrumbLink;
          break;
        }
      }

      this.router.navigate([desigLink.link]);
    }
  }

  toOptionPage(desigLink: { level: number; link: string; text: string }) {
    this.breadcrumbLink.forEach((el) => {
      if (el.level !== desigLink.level) return;

      const origLink = {
        level: el.level,
        link: el.link,
        text: el.text,
      };

      el.link = desigLink.link;
      el.text = desigLink.text;

      if (!el.options) return;

      el.options.push(origLink);
      el.options = el.options.filter((item) => item.link !== desigLink.link);
      el.showSelector = false;
    });

    this.router.navigate([desigLink.link]);
  }

  closeAllSelector() {
    this._breadcrumbLink.forEach((el) => {
      el.showSelector = false;
    });
  }

  ngOnInit(): void {
    this.closeAllSelector$.subscribe(() => {
      this.closeAllSelector();
    });
  }
}
