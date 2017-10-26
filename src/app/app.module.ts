import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { MenutestComponent } from './menutest.component';
import { PprmapComponent } from './pprmap.component';


@NgModule({
  declarations: [
    AppComponent,
    MenutestComponent,
    PprmapComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAbfsWUUSQm2dYLH5W4KIomKDBF_F2GIpU' ,
      libraries: ["places"] 
    }),   
    AgmSnazzyInfoWindowModule,
    Ng4GeoautocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
