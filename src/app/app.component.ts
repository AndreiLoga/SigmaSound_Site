import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { LocaleService, TranslatePipe } from './locale.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  menuOpen = false;
  readonly locale = inject(LocaleService);
  private readonly document = inject(DOCUMENT);
  private readonly scroller = inject(ViewportScroller);

  constructor() {
    this.scroller.setOffset(() => [0, (this.document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0) + 24]);
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }

  closeMenu(): void { this.menuOpen = false; }

  onMenuEscape(event: Event): void {
    if (!this.menuOpen) return;
    event.preventDefault();
    this.closeMenu();
    this.menuToggle?.nativeElement.focus();
  }

  onHeaderFocusOut(event: FocusEvent): void {
    const destination = event.relatedTarget;
    if (destination instanceof Node && !(event.currentTarget as HTMLElement).contains(destination)) this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    if (this.menuOpen && event.target instanceof Node && !this.document.querySelector('.site-header')?.contains(event.target)) this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void { if (window.innerWidth > 767) this.closeMenu(); }
}
