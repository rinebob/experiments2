import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeeThreePanelComponent } from './d3/dee-three-panel/dee-three-panel.component';
import { DashboardPanelComponent } from './dashboard/dashboard-panel/dashboard-panel.component';
import { AngularPanelComponent } from './angular/angular-panel/angular-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DeeThreePanelComponent,
    DashboardPanelComponent,
    AngularPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
