import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpoloyeesComponent } from './empoloyees/empoloyees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpoloyeesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
