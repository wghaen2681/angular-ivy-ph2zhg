import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';
import { IntervalComponent } from './interval/interval.component';

@NgModule({
  imports: [CommonModule, FormsModule, IndexRoutingModule, ShareModule],
  declarations: [
    IndexComponent,
    FromComponent,
    OfComponent,
    TimerComponent,
    IntervalComponent,
  ],
  bootstrap: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule {}
