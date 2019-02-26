import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPredictionRoutingModule } from './color-prediction-routing.module';
import { ColorPredictionComponent } from './color-prediction.component';
import { P5CanvasService } from '../../../service/p5-canvas.service';

@NgModule({
  imports: [
    CommonModule,
    ColorPredictionRoutingModule
  ],
  declarations: [
    ColorPredictionComponent
  ],
  providers: [
    P5CanvasService
  ]
})
export class ColorPredictionModule { }
