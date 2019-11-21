import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxDrivenComponent } from './rx-driven/rx-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    RxDrivenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
