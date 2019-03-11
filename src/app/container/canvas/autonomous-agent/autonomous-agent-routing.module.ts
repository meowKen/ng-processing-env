import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutonomousAgentComponent } from './autonomous-agent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autonomousagent',
    pathMatch: 'full'
  },
  {
    path: 'autonomousagent',
    component: AutonomousAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutonomousAgentRoutingModule { }
