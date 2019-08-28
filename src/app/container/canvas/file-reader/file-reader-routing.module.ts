import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileReaderComponent } from './file-reader.component';

const routes: Routes = [
  {
    path: '',
    component: FileReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class FileReaderRoutingModule { }
