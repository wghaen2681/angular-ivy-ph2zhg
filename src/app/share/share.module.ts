import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BreadCrumbComponent } from './breadCrumb/breadCrumb.component';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, BreadCrumbComponent],
})
export class ShareModule {}
