import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerceptronComponent } from './perceptron.component';

const routes: Routes = [
  {
    path: '',
    component: PerceptronComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerceptronRoutingModule { }
