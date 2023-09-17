import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name4: any;
  country4: any;
  icon4: any;
  description4: any;
  temperature4: number = 0;
  min_temp4: number = 0;
  max_temp4: number = 0;
  pressure4: number = 0;
  humidity4: number = 0;
  visibility4: number = 0;
  speed4: number = 0;
  degree4: number = 0;
  sunrise4: number = 0;
  sunset4: number = 0;


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
        
        this.name4 = this.myWeather.list[3].name;
        this.country4 = this.myWeather.list[3].sys.country;
        this.icon4 = this.myWeather.list[3].weather[0].icon;
        this.description4 = this.myWeather.list[3].weather[0].description;
        this.temperature4 = this.myWeather.list[3].main.temp;
        this.min_temp4 = this.myWeather.list[3].main.temp_min;
        this.max_temp4 = this.myWeather.list[3].main.temp_max;
        this.pressure4 = this.myWeather.list[3].main.pressure;
        this.humidity4 = this.myWeather.list[3].main.humidity;
        this.visibility4 = this.myWeather.list[3].visibility/1000;
        this.speed4 = this.myWeather.list[3].wind.speed;
        this.degree4 = this.myWeather.list[3].wind.deg;
        this.sunrise4 = this.myWeather.list[3].sys.sunrise*1000;
        this.sunset4 = this.myWeather.list[3].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
  

}
