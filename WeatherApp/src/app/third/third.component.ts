import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name3: any;
  country3: any;
  icon3: any;
  description3: any;
  temperature3: number = 0;
  min_temp3: number = 0;
  max_temp3: number = 0;
  pressure3: number = 0;
  humidity3: number = 0;
  visibility3: number = 0;
  speed3: number = 0;
  degree3: number = 0;
  sunrise3: number = 0;
  sunset3: number = 0;


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
        
        this.name3 = this.myWeather.list[2].name;
        this.country3 = this.myWeather.list[2].sys.country;
        this.icon3 = this.myWeather.list[2].weather[0].icon;
        this.description3 = this.myWeather.list[2].weather[0].description;
        this.temperature3 = this.myWeather.list[2].main.temp;
        this.min_temp3 = this.myWeather.list[2].main.temp_min;
        this.max_temp3 = this.myWeather.list[2].main.temp_max;
        this.pressure3 = this.myWeather.list[2].main.pressure;
        this.humidity3 = this.myWeather.list[2].main.humidity;
        this.visibility3 = this.myWeather.list[2].visibility/1000;
        this.speed3 = this.myWeather.list[2].wind.speed;
        this.degree3 = this.myWeather.list[2].wind.deg;
        this.sunrise3 = this.myWeather.list[2].sys.sunrise*1000;
        this.sunset3 = this.myWeather.list[2].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
  

}
