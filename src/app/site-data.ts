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
}

export const heroImages = [
  'assets/poze galerie/zilele ardudului 2023/IMG_3578.jpg',
  'assets/poze galerie/Medieval Ardud 2023/IMG_3401.jpg'
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
    title: 'Microfoane & suport tehnic',
    lead: 'Tot ce ține de voce, prezentatori, artiști și coordonare în timpul programului.',
    capabilities: ['microfonie', 'speech', 'artiști live', 'asistență tehnică'],
    equipment: ['Shure SM58', 'Shure SM57', 'Shure BETA 52A']
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
  { title: 'MedievArtFest Ardud', category: 'festival', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3310.jpg' },
  { title: 'Scenă outdoor', category: 'scenă', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3366.jpg' },
  { title: 'Lumini concert', category: 'lumini', image: 'assets/poze galerie/Medieval Ardud 2023/IMG_3401.jpg' },
  { title: 'Zilele Ardudului', category: 'eveniment public', image: 'assets/poze galerie/zilele ardudului 2023/IMG_3578.jpg' },
  { title: 'Gala Loga Dance', category: 'gală', image: 'assets/poze galerie/loga dance/IMG_3903.jpg' },
  { title: 'Ziua Orașului Satu Mare', category: 'concert', image: 'assets/poze galerie/zo2023/zo3.jpg' },
  { title: 'Rock Filarmonica', category: 'live', image: 'assets/poze galerie/rock filarmonica/rk 1.jpg' },
  { title: 'Producție lumini', category: 'show', image: 'assets/poze/LUMINI 05.jpg' },
  { title: 'Bal Interact', category: 'indoor', image: 'assets/poze galerie/bal interact/EP_1712_0235_6277.JPG' },
  { title: 'Sunet outdoor', category: 'audio', image: 'assets/poze galerie/1 decembrie 2023/sunet 1.jpg' },
  { title: 'Lumini indoor', category: 'lumini', image: 'assets/poze galerie/poze interact 2023/lumini 1.png' },
  { title: 'Ziua Orașului 2022', category: 'eveniment public', image: 'assets/poze galerie/zo9.jpg' }
];
