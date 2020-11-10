import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardPanelComponent} from './dashboard/dashboard-panel/dashboard-panel.component';
import {DeeThreePanelComponent} from './d3/dee-three-panel/dee-three-panel.component';
import {AngularPanelComponent} from './angular/angular-panel/angular-panel.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardPanelComponent},
  {path: 'd3', component: DeeThreePanelComponent},
  {path: 'angular', component: AngularPanelComponent},
  {path: '**', component: DashboardPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
