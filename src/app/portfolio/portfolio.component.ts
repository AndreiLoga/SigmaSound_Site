import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioImage, portfolioImages } from '../site-data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  readonly portfolio = portfolioImages;
  selectedImage: PortfolioImage = this.portfolio[0];

  selectImage(image: PortfolioImage): void {
    this.selectedImage = image;
  }

  trackByTitle(_: number, item: PortfolioImage): string {
    return item.title;
  }
}
