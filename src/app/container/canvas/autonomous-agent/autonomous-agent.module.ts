import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutonomousAgentRoutingModule } from './autonomous-agent-routing.module';
import { AutonomousAgentComponent } from './autonomous-agent.component';
import { P5CanvasService } from '../../../service/p5-canvas.service';

@NgModule({
  imports: [
    CommonModule,
    AutonomousAgentRoutingModule
  ],
  declarations: [
    AutonomousAgentComponent
  ],
  providers: [
    P5CanvasService
  ]
})
export class AutonomousAgentModule { }
