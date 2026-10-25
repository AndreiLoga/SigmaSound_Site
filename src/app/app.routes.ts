import { LegalComponent } from './legal/legal.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galerie', component: PortfolioComponent },
  { path: 'portofoliu', redirectTo: 'galerie', pathMatch: 'full' },
  { path: 'confidentialitate', component: LegalComponent, data: { document: '/confidentialitate' } },
  { path: 'cookies', component: LegalComponent, data: { document: '/cookies' } },
  { path: 'informatii-legale', component: LegalComponent, data: { document: '/informatii-legale' } },
  { path: '**', redirectTo: '' }
];
