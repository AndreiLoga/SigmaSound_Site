export interface ServiceLine {
  title: string;
  lead: string;
  capabilities: string[];
  equipment: string[];
}

export interface EquipmentCategory {
  title: string;
  items: string[];
}

export interface PortfolioImage {
  title: string;
  image: string;
  category: string;
  thumbnail: string;
}

export const heroImages = [
  'assets/poze galerie/web/event-01.jpg',
  'assets/poze galerie/web/event-02.jpg'
];

export const services: ServiceLine[] = [
  {
    title: 'Scenă & structuri',
    lead: 'Baza tehnică pentru evenimente outdoor și indoor.',
    capabilities: ['scenă', 'structuri aluminiu', 'montaj', 'adaptare la spațiu'],
    equipment: ['scene mobile', 'structuri', 'transport tehnic']
  },
  {
    title: 'Sunet & mixaj',
    lead: 'Sisteme audio pentru concerte, spectacole și evenimente publice.',
    capabilities: ['front of house', 'monitoare', 'probe de sunet', 'operare live'],
    equipment: ['DAS Audio Event-210A', 'DAS Audio Event-218A', 'Yamaha TF5']
  },
  {
    title: 'Lumini & efecte',
    lead: 'Design de lumină și atmosferă pentru momente care trebuie să arate puternic.',
    capabilities: ['moving heads', 'beam', 'wash', 'haze', 'fum greu'],
    equipment: ['FOS Beam 7R', 'Stairville MH-X 200', 'Daslight DVC 4 Gold']
  },
  {
    title: 'Ecrane LED',
    lead: 'Afișare video pentru concerte, festivaluri și evenimente corporate, indoor și outdoor.',
    capabilities: ['ecrane LED', 'conținut video', 'integrare în scenă'],
    equipment: ['[TODO: specificații ecrane LED]']
  }
];

export const equipment: EquipmentCategory[] = [
  {
    title: 'Audio',
    items: ['DAS Audio Event-210A', 'DAS Audio Event-218A', 'DAS Audio Road-15A']
  },
  {
    title: 'Mixere',
    items: ['Yamaha TF5', 'Yamaha MG332-14 FX', 'Yamaha MG166 CX']
  },
  {
    title: 'Lumini',
    items: ['Stairville MH-X 200', 'FOS Beam 7R', 'Flash Wash RGBW', 'PAR LED RGBW']
  },
  {
    title: 'Microfoane & efecte',
    items: ['Shure SM58', 'Shure SM57', 'Shure BETA 52A', 'hazer', 'fum greu']
  }
];

export const portfolioImages: PortfolioImage[] = [
  { title: 'MedievArtFest Ardud', category: 'festival', image: 'assets/poze galerie/web/event-03.jpg', thumbnail: 'assets/poze galerie/web/event-03-thumb.jpg' },
  { title: 'Scenă outdoor', category: 'scenă', image: 'assets/poze galerie/web/event-04.jpg', thumbnail: 'assets/poze galerie/web/event-04-thumb.jpg' },
  { title: 'Lumini concert', category: 'lumini', image: 'assets/poze galerie/web/event-02.jpg', thumbnail: 'assets/poze galerie/web/event-02-thumb.jpg' },
  { title: 'Zilele Ardudului', category: 'eveniment public', image: 'assets/poze galerie/web/event-01.jpg', thumbnail: 'assets/poze galerie/web/event-01-thumb.jpg' },
  { title: 'Gala Loga Dance', category: 'gală', image: 'assets/poze galerie/web/event-05.jpg', thumbnail: 'assets/poze galerie/web/event-05-thumb.jpg' },
  { title: 'Rock Filarmonica', category: 'live', image: 'assets/poze galerie/web/event-07.jpg', thumbnail: 'assets/poze galerie/web/event-07-thumb.jpg' },
  { title: 'Lumini indoor', category: 'lumini', image: 'assets/poze galerie/web/event-11.jpg', thumbnail: 'assets/poze galerie/web/event-11-thumb.jpg' },
];
