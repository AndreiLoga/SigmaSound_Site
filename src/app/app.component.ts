import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  title: string;
  kicker: string;
  description: string;
  image: string;
  points: string[];
}

interface EquipmentGroup {
  title: string;
  intro?: string;
  items: string[];
  images: string[];
}

interface PortfolioImage {
  title: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly heroImages = [
    'assets/poze galerie/zilele ardudului 2023/IMG_3578.jpg',
    'assets/poze galerie/LUMINI copy.jpg',
    'assets/poze galerie/Medieval Ardud 2023/IMG_3401.jpg'
  ];

  readonly services: Service[] = [
    {
      title: 'Producție completă de eveniment',
      kicker: 'Scenă · Sunet · Lumini · Video',
      description: 'Construim setup-ul tehnic complet pentru evenimente publice, de la scenă și cablare până la mixaj, lumini și coordonare în ziua evenimentului.',
      image: 'assets/poze/scena.jpg',
      points: ['scenă și structuri', 'sonorizare live', 'lumini inteligente', 'suport tehnic pe teren']
    },
    {
      title: 'Concerte, festivaluri și zile de oraș',
      kicker: 'Outdoor & indoor',
      description: 'Setup-uri adaptate pentru artiști, public numeros și spații deschise, cu atenție la acoperire, siguranță și ritmul programului.',
      image: 'assets/poze galerie/1 decembrie 2023/sunet 1.jpg',
      points: ['front of house', 'monitoare scenă', 'program tehnic', 'montaj și demontaj']
    },
    {
      title: 'Evenimente corporate și instituționale',
      kicker: 'Conferințe · Lansări · Gale',
      description: 'Soluții curate pentru discurs, prezentări, ceremonii și momente artistice, cu operare discretă și predictibilă.',
      image: 'assets/poze galerie/loga dance/IMG_3903.jpg',
      points: ['microfonie', 'mixaj speech', 'lumini ambientale', 'adaptare la sală']
    },
    {
      title: 'Atmosferă și efecte de scenă',
      kicker: 'Show control',
      description: 'Lumini dinamice, haze, fum greu și control DMX pentru momente care arată bine atât din public, cât și în fotografii.',
      image: 'assets/poze galerie/poze interact 2023/lumini 1.png',
      points: ['moving heads', 'beam & wash', 'haze / fum greu', 'scene looks']
    }
  ];

  readonly equipment: EquipmentGroup[] = [
    {
      title: 'Sunet',
      intro: 'Sisteme audio DAS pregătite pentru concerte, scene mobile și evenimente outdoor.',
      items: ['DAS Audio Event-210A', 'DAS Audio Event-218A', 'DAS Audio Road-15A'],
      images: [
        'assets/poze galerie/poze interact 2023/sunet 2 cp.png',
        'assets/poze galerie/Medieval Ardud 2023/IMG_3366cpy.jpg',
        'assets/poze galerie/rock filarmonica/rk 1.jpg'
      ]
    },
    {
      title: 'Mixere',
      intro: 'Control digital și analog pentru evenimente cu cerințe tehnice diferite.',
      items: ['Yamaha TF5 Digital Mixing Console', 'Yamaha MG332-14 FX', 'Yamaha MG166 CX'],
      images: ['assets/poze galerie/mixer digi.jpg']
    },
    {
      title: 'Lumini',
      intro: 'Tehnică de lumini pentru scene mari, momente dinamice și atmosferă controlată.',
      items: [
        'Stairville MH-X 200 Pro Spot Moving Head',
        'FOS Beam 7R Hybrid Plus Moving Head',
        'Flash Wash Moving Head Strong II RGBW 108x3W',
        'Flash LED PAR 64 Slim RGBW',
        'Eurolite PAR 64, Stage Blinder Showtec, Daslight DVC 4 Gold'
      ],
      images: [
        'assets/poze/LUMINI 05.jpg',
        'assets/poze galerie/1 decembrie 2023/lumini 3.jpg',
        'assets/poze/ln1.jpg'
      ]
    },
    {
      title: 'Microfoane',
      items: ['Shure SM58', 'Shure SM58 PGX2', 'Shure BETA 52A', 'Shure SM57'],
      images: ['assets/poze galerie/paula.jpg']
    }
  ];

  readonly workflow = [
    'discuție despre eveniment și spațiu',
    'propunere de setup tehnic',
    'transport, montaj și probe',
    'operare pe durata evenimentului'
  ];

  readonly portfolio: PortfolioImage[] = [
    { title: 'MedievArtFest Ardud', category: 'festival', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3310.jpg' },
    { title: 'Scenă outdoor', category: 'scenă', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3366.jpg' },
    { title: 'Lumini concert', category: 'lumini', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3401.jpg' },
    { title: 'Zilele Ardudului', category: 'eveniment public', image: 'assets/poze galerie/zilele ardudului 2023/IMG_3578.jpg' },
    { title: 'Gala Loga Dance', category: 'gală', image: 'assets/poze galerie/loga dance/IMG_3903.jpg' },
    { title: 'Ziua Orașului Satu Mare', category: 'concert', image: 'assets/poze galerie/zo2023/zo3.jpg' },
    { title: 'Rock Filarmonica', category: 'live', image: 'assets/poze galerie/rock filarmonica/rk 1.jpg' },
    { title: 'Producție lumini', category: 'show', image: 'assets/poze/LUMINI 05.jpg' },
    { title: 'Bal Interact', category: 'indoor', image: 'assets/poze galerie/bal interact/EP_1712_0235_6277.JPG' }
  ];

  selectedImage = this.portfolio[0];
  activeHero = 0;

  selectImage(image: PortfolioImage): void {
    this.selectedImage = image;
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
