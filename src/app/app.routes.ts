import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'gender-predicter',
    loadComponent: () => import('./views/gender-predicter/gender-predicter.page').then( m => m.GenderPredicterPage)
  },
  {
    path: 'age-predicter',
    loadComponent: () => import('./views/age-predicter/age-predicter.page').then( m => m.AgePredicterPage)
  },
  {
    path: 'university-finder',
    loadComponent: () => import('./views/university-finder/university-finder.page').then( m => m.UniversityFinderPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./views/weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./views/pokedex/pokedex.page').then( m => m.PokedexPage)
  },
  {
    path: 'wordpress',
    loadComponent: () => import('./views/wordpress/wordpress.page').then( m => m.WordpressPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./views/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
