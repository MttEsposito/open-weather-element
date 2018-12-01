//import Angular library
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//import App service
import { WeatherServiceService } from '../services/weather-service.service';
import { WeatherHttpLoader } from '../services/weather-loader.service';

//import App constant 
import { weatherConst } from '../constants/weather.constants';


@Component({
  selector: 'open-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private service: WeatherServiceService,
    private loader: WeatherHttpLoader,
    private ngZone: NgZone
  ) { }

  //global variable
  public weather: any = null;
  public fail: boolean = false;
  public appLoader: boolean = false;
  public measure: string = 'celsius';

  //input variable from the element 
  @Input() public apiurl: string;
  @Input() public apikey: string;
  @Input() public imageurl: string;
  @Input() public imageext: string;

  //on init start the APP 
  //initaliaze loader by subcribe 
  //get the location of the user and retrive weather forecast
  //start autoupdate every minute 
  public ngOnInit(): void {
    this.initLoader();
    this.location();
    setInterval(() => {
      this.location();
    }, 60000);
  }

  //convert the original temperature from https://openweathermap.org/
  //by deafult is kelvin then we convert in celsius or fahrenheit
  //convert by the params measure string (celsius || fahrenheit)
  public calcolateTemp(measure: string): void {
    const temperature: number = this.weather.main.temp;
    let newTemperature: number = 0;
    if (measure === 'celsius') {
      newTemperature = temperature - 273.15;
    } else {
      newTemperature = (temperature - 273.15) * 9 / 5 + 32;
    }
    this.measure = measure;
    this.weather.main.calcolateTemp = newTemperature;
  }

  //init loader by subcribe 
  private initLoader(): void {
    this.loader.setLoader.subscribe(value => this.appLoader = value);
  }

  //get the location from user browser
  private location(): void {
    if (!this.weather) {
      this.loader.present();
    }
    this.service.getLocation()
      .then(res => this.getActualWeather(res.coords))
      .catch(err => this.error(err));
  }

  //if the location goes success we got the Location of the user
  //than we get the weather forecast
  private getActualWeather(position: any): void {
    let url: string, params: HttpParams;
    if (this.apikey) {
      url = `${weatherConst.apiDefault}`;
      params = new HttpParams({
        fromObject: {
          lat: position.latitude,
          lon: position.longitude,
          APPID: this.apikey
        }
      });
    } else {
      url = `${this.apiurl}`;
      params = new HttpParams({
        fromObject: {
          lat: position.latitude,
          lon: position.longitude,
        }
      });
    }
    this.http.get(url, { params })
      .subscribe(
        forecast => this.setWeather(forecast),
        error => this.error(error)
      )
  }

  //if get weather success we set the data for UI
  private setWeather(data: any): void {
    this.ngZone.run(() => {
      this.fail = false;
      this.weather = data;
      this.weather.main.calcolateTemp = this.weather.main.temp - 273.15;
      this.loader.dismiss();
    });
  }

  //if get location or get weather fail show error 
  private error(error: any): void {
    this.ngZone.run(() => {
      console.error("ERROR !", error);
      if (!this.weather) {
        this.fail = true;
      }
      this.loader.dismiss();
    });
  }

}