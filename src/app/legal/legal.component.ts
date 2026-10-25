import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { LocaleService, TranslatePipe } from '../locale.service';
import { LegalText, legalDocuments } from './legal-documents';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  readonly locale = inject(LocaleService);
  readonly document = toSignal(inject(ActivatedRoute).data.pipe(map(data => legalDocuments.find(item => item.path === data['document'])!)));
  text(value: LegalText): string { return value[this.locale.language()]; }
}
