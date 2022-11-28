import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CombineLatestComponent } from './combineLatest/combineLatest.component';
import { FilterComponent } from './filter/filter.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { FirstValueFromComponent } from './firstValueFrom/firstValueFrom.component';
import { LastValueFromComponent } from './lastValueFrom/lastValueFrom.component';
import { OperatorComponent } from './operator.component';
import { ShareReplayComponent } from './shareReplay/shareReplay.component';
import { SkipComponent } from './skip/skip.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        pathMatch: 'full',
      },
      {
        path: 'combineLatest',
        component: CombineLatestComponent,
      },
      {
        path: 'exhaustMap',
        component: CombineLatestComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'finalize',
        component: FinalizeComponent,
      },
      {
        path: 'firstValueFrom',
        component: FirstValueFromComponent,
      },
      {
        path: 'lastValue',
        component: LastValueFromComponent,
      },
      {
        path: 'shareReplay',
        component: ShareReplayComponent,
      },
      {
        path: 'skip',
        component: SkipComponent,
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorRoutingModule {}
