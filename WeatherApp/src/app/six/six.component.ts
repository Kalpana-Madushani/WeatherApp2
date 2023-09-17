import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {

  dateTime: Date = new Date();
  myWeather: any;
  
  name6: any;
  country6: any;
  icon6: any;
  description6: any;
  temperature6: number = 0;
  min_temp6: number = 0;
  max_temp6: number = 0;
  pressure6: number = 0;
  humidity6: number = 0;
  visibility6: number = 0;
  speed6: number = 0;
  degree6: number = 0;
  sunrise6: number = 0;
  sunset6: number = 0;


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
        
        this.name6 = this.myWeather.list[5].name;
        this.country6 = this.myWeather.list[5].sys.country;
        this.icon6 = this.myWeather.list[5].weather[0].icon;
        this.description6 = this.myWeather.list[5].weather[0].description;
        this.temperature6 = this.myWeather.list[5].main.temp;
        this.min_temp6 = this.myWeather.list[5].main.temp_min;
        this.max_temp6 = this.myWeather.list[5].main.temp_max;
        this.pressure6 = this.myWeather.list[5].main.pressure;
        this.humidity6 = this.myWeather.list[5].main.humidity;
        this.visibility6 = this.myWeather.list[5].visibility/1000;
        this.speed6 = this.myWeather.list[5].wind.speed;
        this.degree6 = this.myWeather.list[5].wind.deg;
        this.sunrise6 = this.myWeather.list[5].sys.sunrise*1000;
        this.sunset6 = this.myWeather.list[5].sys.sunset*1000;
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }

}
