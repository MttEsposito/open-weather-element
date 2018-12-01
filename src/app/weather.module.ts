//import Angular library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { HttpClientModule } from '@angular/common/http';

//import component
import { WeatherComponent } from './weather.component';

//import services
import { WeatherServiceService } from '../services/weather-service.service';
import { WeatherHttpLoader } from '../services/weather-loader.service';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [
    WeatherComponent
  ],
  providers:[
    WeatherServiceService,
    WeatherHttpLoader
  ]
})

export class AppModule {
  
  constructor(
    private inject: Injector
  ) { }

  //bootsrtap the APP
  public ngDoBootstrap(): void {
    const element = createCustomElement(WeatherComponent, { injector: this.inject });
    customElements.define('open-weather', element);
  }
}
