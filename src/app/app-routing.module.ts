import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartAComponent } from './partA/partA.component';
import { PartBComponent } from './partB/partB.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'index',
    component: PartAComponent,
  },
  {
    path: 'operator',
    component: PartBComponent,
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./rxjs/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'operator',
    loadChildren: () =>
      import('./rxjs/operator/operator.module').then((m) => m.OperatorModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      canceledNavigationResolution: 'computed',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
