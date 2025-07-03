import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  homeSharp,
  informationCircleSharp,
  informationCircleOutline,
  personCircleOutline,
  personCircleSharp,
  calendarNumberOutline,
  calendarNumberSharp,
  schoolOutline,
  schoolSharp,
  thunderstormOutline,
  thunderstormSharp,
  gameControllerOutline,
  gameControllerSharp,
  newspaperOutline,
  newspaperSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    {
      title: 'Gender predicter',
      url: '/gender-predicter',
      icon: 'person-circle',
    },
    { title: 'Age predicter', url: '/age-predicter', icon: 'calendar-number' },
    { title: 'University Finder', url: '/university-finder', icon: 'school' },
    { title: 'Weather', url: '/weather', icon: 'thunderstorm' },
    { title: 'Pokedex', url: '/pokedex', icon: 'game-controller' },
    { title: 'WordPress', url: '/wordpress', icon: 'newspaper' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];
  constructor() {
    addIcons({
      homeOutline,
      homeSharp,
      informationCircleOutline,
      informationCircleSharp,
      personCircleOutline,
      personCircleSharp,
      calendarNumberOutline,
      calendarNumberSharp,
      schoolOutline,
      schoolSharp,
      thunderstormOutline,
      thunderstormSharp,
      gameControllerOutline,
      gameControllerSharp,
      newspaperOutline,
      newspaperSharp
    });
  }
}
