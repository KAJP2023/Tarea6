import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokedex.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  standalone: true,
  imports: [IonButton, IonText, IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PokedexPage implements OnInit {
public name!: string;
public found: boolean = false;
public result = signal<Pokemon>([]);

private httpClient = inject(HttpClient);
  constructor() { }

  ngOnInit() {
  }
  isPredicted() { 
        this.found = true;
        const name = this.name;
        this.httpClient
          .get<Pokemon>('https://api.agify.io/?name=' + name).pipe(
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
        this.found = false;
        this.name = '';
        this.result.set([]); 
         
      }
}
