import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { fetchWeatherApi } from 'openmeteo';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [DatePipe,IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
public currentWeather = signal<number>(0);
public currentWeatherFahrenheit!: number;
public currentDate!: string | null;
private datePipe = inject(DatePipe);

  constructor() { }

  async ngOnInit() {
    const params = {
	"latitude": 19,
	"longitude": -70.6667,
	"models": "ukmo_seamless",
	"current": "temperature_2m",
	"timezone": "auto",
	"forecast_days": 1
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature2m: current.variables(0)!.value(),
	},
};
  console.log(weatherData);
  this.currentWeather.set(weatherData.current.temperature2m);
  this.currentWeatherFahrenheit = (this.currentWeather() * (9/5)) + 32;
  this.currentDate = this.datePipe.transform(weatherData.current.time, 'dd-MM-yyyy');
  }

}
