import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name7: any;
  country7: any;
  icon7: any;
  description7: any;
  temperature7: number = 0;
  min_temp7: number = 0;
  max_temp7: number = 0;
  pressure7: number = 0;
  humidity7: number = 0;
  visibility7: number = 0;
  speed7: number = 0;
  degree7: number = 0;
  sunrise7: number = 0;
  sunset7: number = 0;


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
        
        this.name7 = this.myWeather.list[6].name;
        this.country7 = this.myWeather.list[6].sys.country;
        this.icon7 = this.myWeather.list[6].weather[0].icon;
        this.description7 = this.myWeather.list[6].weather[0].description;
        this.temperature7 = this.myWeather.list[6].main.temp;
        this.min_temp7 = this.myWeather.list[6].main.temp_min;
        this.max_temp7 = this.myWeather.list[6].main.temp_max;
        this.pressure7 = this.myWeather.list[6].main.pressure;
        this.humidity7 = this.myWeather.list[6].main.humidity;
        this.visibility7 = this.myWeather.list[6].visibility/1000;
        this.speed7 = this.myWeather.list[6].wind.speed;
        this.degree7 = this.myWeather.list[6].wind.deg;
        this.sunrise7 = this.myWeather.list[6].sys.sunrise*1000;
        this.sunset7 = this.myWeather.list[6].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
}
