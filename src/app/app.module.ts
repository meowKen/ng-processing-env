import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NearestNeighborsRecommendationComponent } from './container/nearest-neighbors-recommendation/nearest-neighbors-recommendation.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutComponent } from './container/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NearestNeighborsRecommendationComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
