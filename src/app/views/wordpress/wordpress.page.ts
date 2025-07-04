import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonImg } from '@ionic/angular/standalone';
import { News } from './wordpress.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
  standalone: true,
  imports: [IonImg, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WordpressPage implements OnInit {
public found: boolean = false;
  public result: News[] = []; 
// public result = signal<News[] | undefined>(undefined);
private httpClient = inject(HttpClient);
  constructor() { }

  ngOnInit() {
    this.found = true;
          this.httpClient
            .get<News[]>('https://techcrunch.com/wp-json/wp/v2/posts').pipe(
              map((resData)=> resData)
            )
            .subscribe({
              next: (data) => {
                console.log(data);
                if(data){
                  this.result = data;
                  
      
                }
              },
            });
          console.log(this.result);
          console.log(this.result[1]);
          console.log(this.result[2]);
  }
  isPredicted() { 
          
           
        }
        isNotPredicted() {
         
          this.found = false;
         
          // this.result.set(undefined); 
           
        }
}
