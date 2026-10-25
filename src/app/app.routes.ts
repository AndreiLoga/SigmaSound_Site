import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galerie', component: PortfolioComponent },
  { path: 'portofoliu', redirectTo: 'galerie', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
