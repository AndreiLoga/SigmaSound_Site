import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { equipment, heroImages, services } from '../site-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly heroImages = heroImages;
  readonly services = services;
  readonly equipment = equipment;
  activeHero = 0;
  private heroTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.heroTimer = setInterval(() => this.nextHero(), 5200);
  }

  ngOnDestroy(): void {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
    }
  }

  nextHero(): void {
    this.activeHero = (this.activeHero + 1) % this.heroImages.length;
  }

  previousHero(): void {
    this.activeHero = this.activeHero === 0 ? this.heroImages.length - 1 : this.activeHero - 1;
  }

  trackByTitle(_: number, item: { title: string }): string {
    return item.title;
  }

  trackByValue(_: number, value: string): string {
    return value;
  }
}
