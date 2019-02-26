import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrixPlayRoutingModule } from './matrix-play-routing.module';
import { MatrixPlayComponent } from './matrix-play.component';
import { MatrixService } from '../../../service/matrix.service';

@NgModule({
  imports: [
    CommonModule,
    MatrixPlayRoutingModule
  ],
  declarations: [
    MatrixPlayComponent
  ],
  providers: [
    MatrixService
  ]
})
export class MatrixPlayModule { }
