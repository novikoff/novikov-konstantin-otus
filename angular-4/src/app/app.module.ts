import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { GoComponent } from './go/go.component';
import { SettingsComponent } from './settings/settings.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {RouterModule} from '@angular/router';
const routes = [
  { path: '', redirectTo: 'recentlyadded', pathMatch: 'full'},
  { path: 'recentlyadded', component: RecentlyAddedComponent},
  { path: 'go', component: GoComponent},
  { path: 'settings', component: SettingsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    GoComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
