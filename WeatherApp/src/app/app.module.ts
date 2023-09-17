import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FivethComponent } from './fiveth/fiveth.component';
import { Route } from '@angular/router';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';

// const appRoute: Route = [
//   {path: 'weather', component: WeatherComponent},
//   {path: 'first', component: FirstComponent},
//   {path: 'second', component: SecondComponent},
//   {path: 'third', component: ThirdComponent},
//   {path: 'fourth', component: FourthComponent},
//   {path: 'fiveth', component: FivethComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FivethComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
