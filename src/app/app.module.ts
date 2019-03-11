import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';


import { AppComponent } from './app.component';
import { Config } from './config/config';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UtilService } from './service/util.service';
import { AutonomousAgentComponent } from './container/canvas/autonomous-agent/autonomous-agent.component';

export function loadConfig(config: Config) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    Config,
    RouterModule,
    UtilService,
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [Config], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
