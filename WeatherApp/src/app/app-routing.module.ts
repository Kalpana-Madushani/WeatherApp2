import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FivethComponent } from './fiveth/fiveth.component';
import { WeatherComponent } from './weather/weather.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';

const routes: Routes = [
  {path: 'first', component:FirstComponent},
  {path: 'second', component:SecondComponent},
  {path: 'third', component:ThirdComponent},
  {path: 'fourth', component:FourthComponent},
  {path: 'fiveth', component:FivethComponent},
  {path: 'six', component:SixComponent},
  {path: 'seven', component:SevenComponent},
  {path: 'eight', component:EightComponent},
  {path: 'weather', component:WeatherComponent},
  {path: '', component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
