import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sigma Sound | Scenă, sunet, lumini și video' },
  { path: 'portofoliu', component: PortfolioComponent, title: 'Portofoliu | Sigma Sound' },
  { path: '**', redirectTo: '' }
];
