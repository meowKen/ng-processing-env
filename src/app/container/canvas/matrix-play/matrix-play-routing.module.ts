import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatrixPlayComponent } from './matrix-play.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'matrixplay',
    pathMatch: 'full'
  },
  {
    path: 'matrixplay',
    component: MatrixPlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixPlayRoutingModule { }
