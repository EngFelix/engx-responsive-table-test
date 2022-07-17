import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponsiveTableModule } from '@engx/engx-responsive-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
