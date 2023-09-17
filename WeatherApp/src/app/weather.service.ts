import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/group?id=1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244&units=metric&appid=1a78ed178a16ecccfb3696a276d5493e');
  }
}
