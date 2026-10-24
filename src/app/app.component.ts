import { Component, inject } from '@angular/core';
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
  readonly locale = inject(LocaleService);
  private readonly document = inject(DOCUMENT);
  private readonly scroller = inject(ViewportScroller);

  constructor() {
    this.scroller.setOffset(() => [0, (this.document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0) + 24]);
  }
}
