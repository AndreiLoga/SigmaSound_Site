import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../locale.service';
import { contactChannels, heroImages, services } from '../site-data';
import { portfolioEvents } from '../portfolio/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly heroImages = heroImages;
  readonly services = services;
  readonly contactChannels = contactChannels;
  readonly portfolioPreview = ['ziua-orasului-satu-mare-2026', 'ziua-orasului-ardud-2026', 'open-air-symphony-2026'].map((id, index) => {
    const event = portfolioEvents.find(item => item.id === id)!;
    const photo = event.photos[id === 'ziua-orasului-ardud-2026' ? 0 : 4];
    return {
      id: event.id, title: event.title, year: event.year, ...photo,
      imageSrcset: `${encodeURI(photo.thumbnail)} ${photo.width}w, ${encodeURI(photo.image)} ${photo.imageWidth}w`,
      imageSizes: index === 0
        ? '(min-width: 1050px) 58vw, (min-width: 600px) 53vw, calc(100vw - 40px)'
        : '(min-width: 1050px) 32vw, (min-width: 600px) 38vw, calc(100vw - 40px)'
    };
  });
  activeHero = 0;
  private heroHovered = false;
  private heroFocused = false;
  private motionPreference?: MediaQueryList;
  private heroTimer?: ReturnType<typeof setInterval>;
  private revealObserver?: IntersectionObserver;
  private readonly onPlaybackPreferenceChange = (): void => this.updateHeroPlayback();

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

}
