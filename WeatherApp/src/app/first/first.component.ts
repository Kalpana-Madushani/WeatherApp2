import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name1: any;
  country1: any;
  icon1: any;
  description1: any;
  temperature1: number = 0;
  min_temp1: number = 0;
  max_temp1: number = 0;
  pressure1: number = 0;
  humidity1: number = 0;
  visibility1: number = 0;
  speed1: number = 0;
  degree1: number = 0;
  sunrise1: number = 0;
  sunset1: number = 0;


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
        
        this.name1 = this.myWeather.list[0].name;
        this.country1 = this.myWeather.list[0].sys.country;
        this.icon1 = this.myWeather.list[0].weather[0].icon;
        this.description1 = this.myWeather.list[0].weather[0].description;
        this.temperature1 = this.myWeather.list[0].main.temp;
        this.min_temp1 = this.myWeather.list[0].main.temp_min;
        this.max_temp1 = this.myWeather.list[0].main.temp_max;
        this.pressure1 = this.myWeather.list[0].main.pressure;
        this.humidity1 = this.myWeather.list[0].main.humidity;
        this.visibility1 = this.myWeather.list[0].visibility/1000;
        this.speed1 = this.myWeather.list[0].wind.speed;
        this.degree1 = this.myWeather.list[0].wind.deg;
        this.sunrise1 = this.myWeather.list[0].sys.sunrise*1000;
        this.sunset1 = this.myWeather.list[0].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
  

}
