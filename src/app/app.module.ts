import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import {Ng2MapModule} from "ng2-map";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
     // Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDQW0wEvwnxAp0wfcsXRyRcOmV70lVgUzA'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQW0wEvwnxAp0wfcsXRyRcOmV70lVgUzA'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
