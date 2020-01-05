import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RxDrivenComponent} from './rx-driven/rx-driven.component';
import {MatComponentsComponent} from './mat-components/mat-components.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutocompleteDisplayExampleComponent} from './autocomplete-display-example/autocomplete-display-example.component';
import {DemoMaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppCustomFormControl} from './custom-form-control/app.module';
import {TableDynamicColumnsExample} from './dynamic-table/table-dynamic-columns-example';

@NgModule({
  declarations: [
    AppComponent,
    RxDrivenComponent,
    MatComponentsComponent,
    AutocompleteDisplayExampleComponent,
    TableDynamicColumnsExample,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppCustomFormControl,
  ],
  exports: [DemoMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
