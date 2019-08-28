import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapGeneratorRoutingModule } from './map-generator-routing.module';
import { MapGeneratorComponent } from './map-generator.component';
import { MapService } from '../../../service/map.service';
import { P5CanvasService } from '../../../service/p5-canvas.service';

@NgModule({
  imports: [
    CommonModule,
    MapGeneratorRoutingModule
  ],
  declarations: [MapGeneratorComponent],
  providers: [
    MapService,
    P5CanvasService
  ]
})
export class MapGeneratorModule { }
