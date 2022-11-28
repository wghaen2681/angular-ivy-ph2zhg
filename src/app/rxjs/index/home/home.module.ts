import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShareModule } from '../../../share/share.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [FormsModule, ShareModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
