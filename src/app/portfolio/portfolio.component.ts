import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
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
export class PortfolioComponent implements OnDestroy {
  @ViewChild('lightbox', { static: true }) private lightbox!: ElementRef<HTMLDialogElement>;
  private readonly changeDetector = inject(ChangeDetectorRef);
  selectedEvent: PortfolioEvent | null = null;
  selectedIndex = 0;
  imageFailed = false;
  private opener: HTMLElement | null = null;
  private previousOverflow = '';
  readonly locale = inject(LocaleService);
  readonly events = portfolioEvents;

  openPhoto(event: PortfolioEvent, index: number, trigger: Event): void {
    this.opener = trigger.currentTarget as HTMLElement;
    this.selectedEvent = event;
    this.selectedIndex = index;
    this.imageFailed = false;
    this.changeDetector.detectChanges();
    this.previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.lightbox.nativeElement.showModal();
  }

  closePhoto(): void {
    this.lightbox.nativeElement.close();
  }

  onClose(): void {
    document.body.style.overflow = this.previousOverflow;
    this.selectedEvent = null;
    this.opener?.focus({ preventScroll: true });
  }

  movePhoto(direction: number): void {
    if (!this.selectedEvent) return;
    this.selectedIndex = (this.selectedIndex + direction + this.selectedEvent.photos.length) % this.selectedEvent.photos.length;
    this.imageFailed = false;
  }

  onLightboxKey(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      const controls = Array.from(this.lightbox.nativeElement.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.movePhoto(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  ngOnDestroy(): void {
    if (this.lightbox.nativeElement.open) document.body.style.overflow = this.previousOverflow;
  }

  title(event: PortfolioEvent): string {
    return event.title;
  }

  photoLabel(event: PortfolioEvent, index: number): string {
    return `${this.locale.t('Producție tehnică de eveniment')}: ${event.title}${event.year ? ' ' + event.year : ''}, ${this.locale.t('fotografia')} ${index + 1}`;
  }
}
