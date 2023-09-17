import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fiveth',
  templateUrl: './fiveth.component.html',
  styleUrls: ['./fiveth.component.css']
})
export class FivethComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name5: any;
  country5: any;
  icon5: any;
  description5: any;
  temperature5: number = 0;
  min_temp5: number = 0;
  max_temp5: number = 0;
  pressure5: number = 0;
  humidity5: number = 0;
  visibility5: number = 0;
  speed5: number = 0;
  degree5: number = 0;
  sunrise5: number = 0;
  sunset5: number = 0;


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
        
        this.name5 = this.myWeather.list[4].name;
        this.country5 = this.myWeather.list[4].sys.country;
        this.icon5 = this.myWeather.list[4].weather[0].icon;
        this.description5 = this.myWeather.list[4].weather[0].description;
        this.temperature5 = this.myWeather.list[4].main.temp;
        this.min_temp5 = this.myWeather.list[4].main.temp_min;
        this.max_temp5 = this.myWeather.list[4].main.temp_max;
        this.pressure5 = this.myWeather.list[4].main.pressure;
        this.humidity5 = this.myWeather.list[4].main.humidity;
        this.visibility5 = this.myWeather.list[4].visibility/1000;
        this.speed5 = this.myWeather.list[4].wind.speed;
        this.degree5 = this.myWeather.list[4].wind.deg;
        this.sunrise5 = this.myWeather.list[4].sys.sunrise*1000;
        this.sunset5 = this.myWeather.list[4].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
  

}
