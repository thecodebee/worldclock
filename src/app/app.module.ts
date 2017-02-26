import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SliderModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimerComponent,
    TimerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
