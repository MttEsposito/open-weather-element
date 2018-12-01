//import Angular library
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class WeatherHttpLoader {

    //set a variable as a boolean BehaviorSubject
    private loader = new BehaviorSubject<boolean>(true);
    
    //set a new variable as observable for let component subscribe
    public setLoader = this.loader.asObservable();

    constructor() { }
    
    //method for change the value of the BehaviorSubject => TRUE
    //method for show the loader
    public present(): void {
        this.loader.next(true);
    }

    //method for change the value of the BehaviorSubject => FALSE
    //method for hide the loader
    public dismiss(): void {
        this.loader.next(false);
    }

}

