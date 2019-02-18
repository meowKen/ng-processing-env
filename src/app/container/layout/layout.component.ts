import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('myFrame').style.marginLeft = '250px';
  }

  closeNav() {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('myFrame').style.marginLeft = '0';
  }

}
