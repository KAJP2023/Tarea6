import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { GenderResult} from './result.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-gender-predicter',
  templateUrl: './gender-predicter.page.html',
  styleUrls: ['./gender-predicter.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonText,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class GenderPredicterPage implements OnInit {
  public name: string = '';
  public predicted: boolean = false;
  // Make result a signal 
  public result = signal<GenderResult |undefined>(undefined);
  private httpClient = inject(HttpClient);
  constructor() {}

  ngOnInit() {}

  isPredicted() { 
    this.predicted = true;
    const name = this.name;
    this.httpClient
      .get<GenderResult>('https://api.genderize.io/?name=' + name).pipe(
        map((resData)=> resData)
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          if(data){
            this.result.set(data);

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
