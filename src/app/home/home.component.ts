import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService, TranslatePipe } from '../locale.service';
import { heroImages, services } from '../site-data';
import { portfolioEvents } from '../portfolio/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly locale = inject(LocaleService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly heroImages = [...heroImages].reverse();
  readonly services = services;
  readonly portfolioPreview = ['ziua-orasului-satu-mare-2026', 'ziua-orasului-ardud-2026', 'street-music-festival-2026'].map(id => {
    const event = portfolioEvents.find(item => item.id === id)!;
    const photo = event.photos[id === 'ziua-orasului-satu-mare-2026' ? 2 : 0];
    return { id: event.id, title: event.title, year: event.year, ...photo };
  });
  activeHero = 0;
  heroPaused = false;
  readonly minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  sending = false;
  formStatus: 'idle' | 'success' | 'error' = 'idle';
  private heroTimer?: ReturnType<typeof setInterval>;
  private revealObserver?: IntersectionObserver;

  async submitQuote(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (this.sending || !form.reportValidity()) return;
    const data = new FormData(form);
    for (const name of ['name', 'location', 'details']) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(input.value.trim() ? '' : this.locale.t('Completează acest câmp.'));
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
    this.heroPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.startHero();
  }

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    this.revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        this.revealObserver?.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    this.host.nativeElement.classList.add('motion-ready');
    this.host.nativeElement.querySelectorAll('[data-reveal]').forEach(section => this.revealObserver?.observe(section));
  }

  ngOnDestroy(): void {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.revealObserver?.disconnect();
  }

  private startHero(): void {
    if (!this.heroPaused) this.heroTimer = setInterval(() => this.nextHero(), 5200);
  }

  pauseHero(): void {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.heroPaused = true;
  }

  toggleHero(): void {
    if (this.heroPaused) {
      this.heroPaused = false;
      this.startHero();
    } else this.pauseHero();
  }


  nextHero(): void {
    this.activeHero = (this.activeHero + 1) % this.heroImages.length;
  }

  previousHero(): void {
    this.activeHero = this.activeHero === 0 ? this.heroImages.length - 1 : this.activeHero - 1;
  }


  trackByTitle(_: number, item: { title: string }): string { return item.title; }
  trackByValue(_: number, value: string): string { return value; }
}
