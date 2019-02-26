import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  providers: [
  ]
})
export class LayoutModule { }
