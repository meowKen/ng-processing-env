import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyCatComponent } from './copy-cat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'copycat',
    pathMatch: 'full'
  },
  {
    path: 'copycat',
    component: CopyCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopyCatRoutingModule { }
