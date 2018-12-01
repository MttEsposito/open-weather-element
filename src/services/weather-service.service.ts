//import Angular library
import { Injectable } from '@angular/core';
import { weatherConst } from '../constants/weather.constants';

@Injectable()

export class WeatherServiceService {

  constructor() { }

  //get the user geolocation and return a Promise of Position
  public getLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error)
          },
          weatherConst.positionOptions
        );
      } else {
        reject('Error - Geolocation is not supported by this browser.');
      }
    })
  }

}
