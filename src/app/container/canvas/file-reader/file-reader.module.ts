import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileReaderRoutingModule } from './file-reader-routing.module';
import { FileReaderComponent } from './file-reader.component';
import { FileReaderCustomService } from '../../../service/file-reader-custom.service';

@NgModule({
  imports: [
    CommonModule,
    FileReaderRoutingModule
  ],
  declarations: [FileReaderComponent],
  providers: [
    FileReaderCustomService
  ]
})
export class FileReaderModule { }
