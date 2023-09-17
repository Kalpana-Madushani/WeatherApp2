import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  
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
