import { Component, OnInit } from '@angular/core';
import { FileReaderCustomService } from '../../../service/file-reader-custom.service';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent implements OnInit {

  private _bytes: any;

  constructor(private fileReader: FileReaderCustomService) { }

  ngOnInit() {
    this.fileReader.get('full_numpy_bitmap_bus.npy')
      .subscribe((file) => {
        this._bytes = file;
      });
    console.log(this._bytes);
  }

  log(what: string) {
    console.log(this[what] ? this[what] :  what + 'NONE OF DAT');
  }

  get bytes() {
    return this._bytes;
  }

}
