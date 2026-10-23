import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { equipment, heroImages, portfolioImages, services } from '../site-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly heroImages = heroImages;
  readonly services = services;
  readonly equipment = equipment;
  readonly portfolioPreview = portfolioImages
    .filter((item) => !heroImages.includes(item.image))
    .slice(1, 5);
  activeHero = 0;
  activePortfolio = 0;
  readonly minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  sending = false;
  formStatus: 'idle' | 'success' | 'error' = 'idle';
  private heroTimer?: ReturnType<typeof setInterval>;
  private portfolioTouchStartX = 0;

  async submitQuote(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (this.sending || !form.reportValidity()) return;
    const data = new FormData(form);
    for (const name of ['name', 'location', 'details']) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(input.value.trim() ? '' : 'Completează acest câmp.');
    }
    if (!form.reportValidity()) return;
    this.sending = true;
    this.formStatus = 'idle';
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error('Request failed');
      this.formStatus = 'success';
      form.reset();
    } catch {
      this.formStatus = 'error';
    } finally {
      this.sending = false;
    }
  }

  clearFieldError(event: Event): void {
    (event.target as HTMLInputElement).setCustomValidity('');
    if (this.formStatus !== 'idle') this.formStatus = 'idle';
  }

  ngOnInit(): void {
    this.heroTimer = setInterval(() => this.nextHero(), 5200);
  }

  ngOnDestroy(): void {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
    }
  }

  nextHero(): void {
    this.activeHero = (this.activeHero + 1) % this.heroImages.length;
  }

  previousHero(): void {
    this.activeHero = this.activeHero === 0 ? this.heroImages.length - 1 : this.activeHero - 1;
  }

  nextPortfolio(): void {
    this.activePortfolio = (this.activePortfolio + 1) % this.portfolioPreview.length;
  }

  previousPortfolio(): void {
    this.activePortfolio = this.activePortfolio === 0 ? this.portfolioPreview.length - 1 : this.activePortfolio - 1;
  }

  selectPortfolio(index: number): void {
    this.activePortfolio = index;
  }

  onPortfolioTouchStart(event: TouchEvent): void {
    this.portfolioTouchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  onPortfolioTouchEnd(event: TouchEvent): void {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = endX - this.portfolioTouchStartX;

    if (Math.abs(deltaX) < 40) {
      return;
    }

    if (deltaX < 0) {
      this.nextPortfolio();
    } else {
      this.previousPortfolio();
    }
  }

  trackByTitle(_: number, item: { title: string }): string {
    return item.title;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
