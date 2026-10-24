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
  readonly heroImages = heroImages;
  readonly services = services;
  readonly portfolioPreview = ['ziua-orasului-satu-mare-2026', 'ziua-orasului-ardud-2026', 'open-air-symphony-2026'].map(id => {
    const event = portfolioEvents.find(item => item.id === id)!;
    const photo = event.photos[id === 'ziua-orasului-ardud-2026' ? 0 : 4];
    return {
      id: event.id, title: event.title, year: event.year, ...photo,
      titleKey: id === 'open-air-symphony-2026' ? 'Simfonie în aer liber' : null,
      summaryKey: id === 'open-air-symphony-2026' ? 'Concert în aer liber, din portofoliul Sigma Sound.' : null
    };
  });
  activeHero = 0;
  private heroHovered = false;
  private heroFocused = false;
  private motionPreference?: MediaQueryList;
  readonly minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  sending = false;
  formStatus: 'idle' | 'success' | 'error' = 'idle';
  private heroTimer?: ReturnType<typeof setInterval>;
  private revealObserver?: IntersectionObserver;
  private readonly onPlaybackPreferenceChange = (): void => this.updateHeroPlayback();

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
    this.motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.motionPreference.addEventListener('change', this.onPlaybackPreferenceChange);
    document.addEventListener('visibilitychange', this.onPlaybackPreferenceChange);
    this.updateHeroPlayback();
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
    this.motionPreference?.removeEventListener('change', this.onPlaybackPreferenceChange);
    document.removeEventListener('visibilitychange', this.onPlaybackPreferenceChange);
    this.revealObserver?.disconnect();
  }

  private updateHeroPlayback(): void {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.heroTimer = undefined;
    if (this.motionPreference?.matches || this.heroHovered || this.heroFocused || document.hidden || this.heroImages.length < 2) return;
    this.heroTimer = setInterval(() => {
      this.activeHero = (this.activeHero + 1) % this.heroImages.length;
    }, 5200);
  }

  setHeroHover(hovered: boolean): void {
    this.heroHovered = hovered;
    this.updateHeroPlayback();
  }

  setHeroFocus(focused: boolean): void {
    this.heroFocused = focused;
    this.updateHeroPlayback();
  }


  onHeroFocusOut(event: FocusEvent): void {
    const destination = event.relatedTarget;
    this.setHeroFocus(destination instanceof Node && (event.currentTarget as HTMLElement).contains(destination));
  }


  trackByTitle(_: number, item: { title: string }): string { return item.title; }
  trackByValue(_: number, value: string): string { return value; }

  previewTitle(item: { title: string; titleKey: string | null }): string {
    return item.titleKey ? this.locale.t(item.titleKey) : item.title;
  }
}
