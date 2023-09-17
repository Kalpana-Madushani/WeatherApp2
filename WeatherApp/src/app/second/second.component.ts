import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name2: any;
  country2: any;
  icon2: any;
  description2: any;
  temperature2: number = 0;
  min_temp2: number = 0;
  max_temp2: number = 0;
  pressure2: number = 0;
  humidity2: number = 0;
  visibility2: number = 0;
  speed2: number = 0;
  degree2: number = 0;
  sunrise2: number = 0;
  sunset2: number = 0;


  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  ngOnInit(): void{
    this.weatherService.getWeather().subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        
        this.name2 = this.myWeather.list[1].name;
        this.country2 = this.myWeather.list[1].sys.country;
        this.icon2 = this.myWeather.list[1].weather[0].icon;
        this.description2 = this.myWeather.list[1].weather[0].description;
        this.temperature2 = this.myWeather.list[1].main.temp;
        this.min_temp2 = this.myWeather.list[1].main.temp_min;
        this.max_temp2 = this.myWeather.list[1].main.temp_max;
        this.pressure2 = this.myWeather.list[1].main.pressure;
        this.humidity2 = this.myWeather.list[1].main.humidity;
        this.visibility2 = this.myWeather.list[1].visibility/1000;
        this.speed2 = this.myWeather.list[1].wind.speed;
        this.degree2 = this.myWeather.list[1].wind.deg;
        this.sunrise2 = this.myWeather.list[1].sys.sunrise*1000;
        this.sunset2 = this.myWeather.list[1].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
  
}
