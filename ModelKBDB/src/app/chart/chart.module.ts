import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";


import {ChartComponent} from './chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [ChartComponent]
})
export class ChartModule {
}
