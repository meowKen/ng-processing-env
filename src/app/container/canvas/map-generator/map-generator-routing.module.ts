import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapGeneratorComponent } from './map-generator.component';

const routes: Routes = [
  {
    path: '',
    component: MapGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapGeneratorRoutingModule { }
