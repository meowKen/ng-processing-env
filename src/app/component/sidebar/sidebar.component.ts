import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() private closeNavEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    this.closeNavEvent.emit(true);
  }

}
