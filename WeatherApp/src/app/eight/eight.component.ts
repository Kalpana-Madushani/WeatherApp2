import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name8: any;
  country8: any;
  icon8: any;
  description8: any;
  temperature8: number = 0;
  min_temp8: number = 0;
  max_temp8: number = 0;
  pressure8: number = 0;
  humidity8: number = 0;
  visibility8: number = 0;
  speed8: number = 0;
  degree8: number = 0;
  sunrise8: number = 0;
  sunset8: number = 0;



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
        
        this.name8 = this.myWeather.list[7].name;
        this.country8 = this.myWeather.list[7].sys.country;
        this.icon8 = this.myWeather.list[7].weather[0].icon;
        this.description8 = this.myWeather.list[7].weather[0].description;
        this.temperature8 = this.myWeather.list[7].main.temp;
        this.min_temp8 = this.myWeather.list[7].main.temp_min;
        this.max_temp8 = this.myWeather.list[7].main.temp_max;
        this.pressure8 = this.myWeather.list[7].main.pressure;
        this.humidity8 = this.myWeather.list[7].main.humidity;
        this.visibility8 = this.myWeather.list[7].visibility/1000;
        this.speed8 = this.myWeather.list[7].wind.speed;
        this.degree8 = this.myWeather.list[7].wind.deg;
        this.sunrise8 = this.myWeather.list[7].sys.sunrise*1000;
        this.sunset8 = this.myWeather.list[7].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }

}
