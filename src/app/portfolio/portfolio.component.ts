import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../locale.service';
import { EventPhoto, PortfolioEvent, portfolioEvents } from './portfolio-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnDestroy {
  @ViewChild('lightbox', { static: true }) private lightbox!: ElementRef<HTMLDialogElement>;
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly eventIndexes: Record<string, number> = {};
  selectedEvent: PortfolioEvent | null = null;
  selectedIndex = 0;
  imageFailed = false;
  private opener: HTMLElement | null = null;
  private previousOverflow = '';
  private scrollLocked = false;
  readonly locale = inject(LocaleService);
  readonly events = portfolioEvents;

  activeIndex(event: PortfolioEvent): number { return this.eventIndexes[event.id] ?? 0; }

  activePhoto(event: PortfolioEvent): EventPhoto { return event.photos[this.activeIndex(event)]; }

  photoSources(photo: EventPhoto): string {
    return `${encodeURI(photo.thumbnail)} ${photo.width}w, ${encodeURI(photo.image)} ${photo.imageWidth}w`;
  }

  selectEventPhoto(event: PortfolioEvent, index: number): void {
    const selected = (index + event.photos.length) % event.photos.length;
    this.eventIndexes[event.id] = selected;
    const strip = this.host.nativeElement.querySelector<HTMLElement>(`#${event.id} .event-thumbnails`);
    const thumbnail = strip?.children[selected] as HTMLElement | undefined;
    if (strip && thumbnail && strip.clientWidth > 0) {
      strip.scrollTo({ left: thumbnail.offsetLeft - (strip.clientWidth - thumbnail.offsetWidth) / 2,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }

  moveEventPhoto(event: PortfolioEvent, direction: number): void {
    this.selectEventPhoto(event, this.activeIndex(event) + direction);
  }

  onEventGalleryKey(event: KeyboardEvent, entry: PortfolioEvent): void {
    if (event.altKey || event.ctrlKey || event.metaKey || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    this.moveEventPhoto(entry, event.key === 'ArrowLeft' ? -1 : 1);
    if (event.target instanceof Element && event.target.closest('.event-thumbnail')) {
      const strip = this.host.nativeElement.querySelector(`#${entry.id} .event-thumbnails`);
      (strip?.children[this.activeIndex(entry)] as HTMLElement | undefined)?.focus({ preventScroll: true });
    }
  }

  openPhoto(event: PortfolioEvent, index: number, trigger: Event): void {
    this.opener = trigger.currentTarget as HTMLElement;
    this.selectedEvent = event;
    this.selectedIndex = index;
    this.selectEventPhoto(event, index);
    this.imageFailed = false;
    this.changeDetector.detectChanges();
    if (!this.scrollLocked) {
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.scrollLocked = true;
    }
    this.lightbox.nativeElement.showModal();
  }

  closePhoto(): void {
    this.lightbox.nativeElement.close();
  }

  onClose(): void {
    // A queued close event from an earlier opening must not clear a reopened dialog.
    if (this.lightbox.nativeElement.open || !this.scrollLocked) return;
    document.body.style.overflow = this.previousOverflow;
    this.scrollLocked = false;
    this.selectedEvent = null;
    this.opener?.focus({ preventScroll: true });
  }

  movePhoto(direction: number): void {
    if (!this.selectedEvent) return;
    this.selectedIndex = (this.selectedIndex + direction + this.selectedEvent.photos.length) % this.selectedEvent.photos.length;
    this.selectEventPhoto(this.selectedEvent, this.selectedIndex);
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
    if (this.scrollLocked) document.body.style.overflow = this.previousOverflow;
  }

  photoLabel(event: PortfolioEvent, index: number): string {
    return `${this.locale.t('Producție tehnică de eveniment')}: ${event.title}${event.year ? ' ' + event.year : ''}, ${this.locale.t('fotografia')} ${index + 1}`;
  }
}
