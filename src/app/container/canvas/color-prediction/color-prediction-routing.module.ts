import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPredictionComponent } from './color-prediction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'colorprediction',
    pathMatch: 'full'
  },
  {
    path: 'colorprediction',
    component: ColorPredictionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPredictionRoutingModule { }
