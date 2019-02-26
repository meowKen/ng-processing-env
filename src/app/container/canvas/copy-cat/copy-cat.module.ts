import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopyCatRoutingModule } from './copy-cat-routing.module';
import { CopyCatComponent } from './copy-cat.component';
import { MarkovService } from '../../../service/markov.service';

@NgModule({
  imports: [
    CommonModule,
    CopyCatRoutingModule
  ],
  declarations: [
    CopyCatComponent
  ],
  providers: [
    MarkovService
  ]
})
export class CopyCatModule { }
