import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { NearestNeighborsRecommendationComponent } from '../nearest-neighbors/nearest-neighbors-recommendation.component';
import { PerceptronComponent } from '../canvas/perceptron/perceptron.component';
import { TrainingService } from '../../service/training.service';

export const COMPONENTSCANVAS = [
  PerceptronComponent,
  NearestNeighborsRecommendationComponent
];

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    ...COMPONENTSCANVAS
  ],
  providers: [
    TrainingService
  ]
})
export class LayoutModule { }
