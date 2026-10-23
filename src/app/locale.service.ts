import { DOCUMENT } from '@angular/common';
import { Injectable, Pipe, PipeTransform, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { english } from './translations';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly language = signal<'ro' | 'en'>('ro');
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);

  constructor() {
    effect(() => this.updateMetadata());
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.updateMetadata();
    });
  }

  t(value: string): string {
    return this.language() === 'en' ? english[value] ?? value : value;
  }

  private updateMetadata(): void {
    const portfolio = this.router.url.split(/[?#]/)[0] === '/portofoliu';
    const title = this.t(portfolio ? 'Portofoliu | Sigma Sound' : 'Sigma Sound | Scenă, sunet, lumini și ecrane LED');
    const description = this.t(portfolio
      ? 'Fotografii de la evenimente din portofoliul Sigma Sound: scenă, sunet și lumini pentru producții live.'
      : 'Sigma Sound: scenă, sunet, lumini și ecrane LED pentru concerte, festivaluri și evenimente corporate, indoor și outdoor, în Satu Mare.');
    this.document.documentElement.lang = this.language();
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: this.language() === 'ro' ? 'ro_RO' : 'en_GB' });
  }
}

@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly locale = inject(LocaleService);
  transform(value: string): string { return this.locale.t(value); }
}
