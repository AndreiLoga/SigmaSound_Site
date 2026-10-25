import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, Renderer2, inject } from '@angular/core';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollReveal: 'left' | 'right' | 'up' = 'up';
  @Input() revealDelay = 0;
  @HostBinding('attr.data-scroll-reveal') get direction(): string { return this.appScrollReveal; }
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;
  private preference?: MediaQueryList;
  private readonly onPreferenceChange = (): void => { if (this.preference?.matches) this.show(); };

  ngAfterViewInit(): void {
    this.preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (this.preference.matches || !('IntersectionObserver' in window)) return;
    this.preference.addEventListener('change', this.onPreferenceChange);
    const node = this.element.nativeElement;
    this.renderer.setStyle(node, '--reveal-delay', `${this.revealDelay}ms`);
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) this.show();
    }, { threshold: 0.01, rootMargin: '0px 0px -32px 0px' });
    this.renderer.addClass(node, 'reveal-pending');
    this.observer.observe(node);
  }

  @HostListener('focusin') show(): void {
    this.renderer.removeClass(this.element.nativeElement, 'reveal-pending');
    this.observer?.disconnect();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.preference?.removeEventListener('change', this.onPreferenceChange);
  }
}
