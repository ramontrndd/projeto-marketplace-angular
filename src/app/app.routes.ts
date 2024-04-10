import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { AboutComponent } from './pages/about/about.component';
import { FilmsComponent } from './pages/films/films.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    title: 'Marketplace - Inicio',
    component: HomeComponent,
  },
  {
    path: 'releases',
    title: 'Marketplace - Lançamentos',
    component: ReleasesComponent,
  },
  {
    path: 'films',
    title: 'Marketplace - Filmes',
    component: FilmsComponent,
  },
  {
    path: 'about',
    title: 'Marketplace - Sobre',
    component: AboutComponent,
  },
  {
    path: 'checkout',
    title: 'Marketplace - Checkout',
    component: CheckoutComponent,
  },
];
