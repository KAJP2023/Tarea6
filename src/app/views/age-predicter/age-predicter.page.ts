import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonText, IonButton, IonInput, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { AgeResult } from './age-predicter.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-age-predicter',
  templateUrl: './age-predicter.page.html',
  styleUrls: ['./age-predicter.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardTitle, IonCard,  IonCardHeader,IonInput, IonButton, IonText, IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AgePredicterPage implements OnInit {
  public name: string = '';
  public predicted: boolean = false;
   public result = signal<AgeResult | undefined>(undefined);
   public age: number = 0;

  private httpClient = inject(HttpClient);
  constructor() { }

  ngOnInit() {
  }
   isPredicted() { 
      this.predicted = true;
      const name = this.name;
      this.httpClient
        .get<AgeResult>('https://api.agify.io/?name=' + name).pipe(
          map((resData)=> resData)
        )
        .subscribe({
          next: (data) => {
            console.log(data);
            if(data){
              this.result.set(data);
              this.age = data.age
  
            }
          },
        });
      console.log(this.result());
    }
    isNotPredicted() {
      this.predicted = false;
      this.name = '';
      this.result.set(undefined); 
       
    }
}
