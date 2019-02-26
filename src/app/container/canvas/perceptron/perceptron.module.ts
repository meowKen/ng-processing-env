import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerceptronRoutingModule } from './perceptron-routing.module';
import { PerceptronComponent } from './perceptron.component';
import { TrainingService } from '../../../service/training.service';

@NgModule({
  imports: [
    CommonModule,
    PerceptronRoutingModule
  ],
  declarations: [
    PerceptronComponent,
  ],
  providers: [
    TrainingService
  ]
})
export class PerceptronModule { }
