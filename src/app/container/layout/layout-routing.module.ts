import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  /**
   * @CONFIG ./app/assets/existingCanvassesConfig.json ==> paths must mach the names specified in JSON
   */
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'autonomousagent',
    loadChildren: '../canvas/autonomous-agent/autonomous-agent.module#AutonomousAgentModule'
  },
  {
    path: 'colorprediction',
    loadChildren: '../canvas/color-prediction/color-prediction.module#ColorPredictionModule'
  },
  {
    path: 'matrixplay',
    loadChildren: '../canvas/matrix-play/matrix-play.module#MatrixPlayModule'
  },
  {
    path: 'copycat',
    loadChildren: '../canvas/copy-cat/copy-cat.module#CopyCatModule'
  },
  {
    path: 'perceptron',
    loadChildren: '../canvas/perceptron/perceptron.module#PerceptronModule'
  },
  {
    path: 'default',
    loadChildren: '../canvas/default/default.module#DefaultModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
