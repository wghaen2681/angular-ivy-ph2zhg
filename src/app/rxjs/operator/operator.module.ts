import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OperatorComponent } from './operator.component';

import { ShareReplayComponent } from './shareReplay/shareReplay.component';
import { LastValueFromComponent } from './lastValueFrom/lastValueFrom.component';
import { FirstValueFromComponent } from './firstValueFrom/firstValueFrom.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';
import { CombineLatestComponent } from './combineLatest/combineLatest.component';
import { SkipComponent } from './skip/skip.component';
import { FilterComponent } from './filter/filter.component';
import { OperatorRoutingModule } from './operator-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, OperatorRoutingModule],
  declarations: [
    OperatorComponent,
    ShareReplayComponent,
    LastValueFromComponent,
    FirstValueFromComponent,
    FinalizeComponent,
    SwitchMapComponent,
    CombineLatestComponent,
    SkipComponent,
    FilterComponent,
  ],
  bootstrap: [OperatorComponent],
  exports: [OperatorComponent],
})
export class OperatorModule {}
