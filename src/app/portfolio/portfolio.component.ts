import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService, TranslatePipe } from '../locale.service';
import { PortfolioEvent, portfolioEvents } from './portfolio-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  readonly locale = inject(LocaleService);
  readonly events = portfolioEvents;

  title(event: PortfolioEvent): string {
    return this.locale.language() === 'en' ? event.titleEn : event.title;
  }

  photoLabel(event: PortfolioEvent, index: number): string {
    return `${this.title(event)}${event.year ? ' ' + event.year : ''}, ${this.locale.t('fotografia')} ${index + 1}`;
  }
}
