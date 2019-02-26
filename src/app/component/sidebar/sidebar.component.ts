import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Config } from '../../config/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() private closeNavEvent = new EventEmitter<boolean>();
  @Output() private _openCanvas = new EventEmitter<string>();

  private _canvassesICanLoad: Array<string> = [];

  constructor(private config: Config) {
    this._canvassesICanLoad = this.config.existingCanvasses;
  }

  ngOnInit() {
  }

  closeNav() {
    this.closeNavEvent.emit(true);
  }

  public get canvassesICanLoad(): Array<string> {
    return this._canvassesICanLoad;
  }
  public set openCanvas(value) {
    this._openCanvas = value;
  }

}
