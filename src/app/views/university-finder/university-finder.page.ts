import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonText, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { University } from './university.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-university-finder',
  templateUrl: './university-finder.page.html',
  styleUrls: ['./university-finder.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonInput, IonButton, IonText, IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UniversityFinderPage implements OnInit {
  public country: string = '';
  public found: boolean = false;
  public results = signal<University[] | undefined>(undefined);
  

  private httpClient = inject(HttpClient);
  constructor() { }

  ngOnInit() {
  }

  isFound() { 
        this.found = true;
        const country = this.country;
        this.httpClient
          .get<University[]>('http://universities.hipolabs.com/search?country=' + country).pipe(
            map((resData)=> resData)
          )
          .subscribe({
            next: (data) => {
              console.log(data);
              if(data){
                this.results.set(data);    
              }
            },
          });
        console.log(this.results());
      }
      isNotFound() {
        this.found = false;
        this.country = '';
        this.results.set(undefined); 
         
      }
}
