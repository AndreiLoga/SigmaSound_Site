export interface ServiceLine {
  imageSrcset?: string;
  imageSizes?: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
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
    "title": "Scenă",
    "lead": "Scene și structuri adaptate locației, pentru concerte, festivaluri și evenimente publice.",
    "capabilities": [
      "structuri de scenă",
      "montaj și demontaj",
      "adaptare la locație"
    ],
    "equipment": [
      "scene mobile",
      "structuri aluminiu",
      "transport tehnic"
    ],
    "image": "assets/poze galerie/optimized/v3/83f87b0328807adc26b9d93e-thumb.jpg",
    "imageAlt": "Ziua Orașului Satu Mare 2026",
    "width": 520,
    "height": 390
  },
  {
    "title": "Sunet",
    "lead": "Sonorizare pentru public și artiști, cu mixaj live și monitorizare de scenă.",
    "capabilities": [
      "sonorizare",
      "mixaj live",
      "monitoare de scenă",
      "probe de sunet"
    ],
    "equipment": [
      "DAS Audio Event-210A",
      "DAS Audio Event-218A",
      "Yamaha TF5"
    ],
    "image": "assets/poze galerie/optimized/v3/36d1af775537067600f06093-thumb.jpg",
    "imageAlt": "Ziua Orașului Ardud 2026",
    "width": 520,
    "height": 347
  },
  {
    "title": "Lumini",
    "lead": "Lumină pentru scenă, artiști și decor, programată în ritmul spectacolului.",
    "capabilities": [
      "moving heads",
      "beam și wash",
      "efecte de scenă",
      "operare live"
    ],
    "equipment": [
      "FOS Beam 7R",
      "Stairville MH-X 200",
      "Daslight DVC 4 Gold"
    ],
    "image": "assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e.jpg",
    "imageAlt": "Ziua Orașului Satu Mare 2026",
    "width": 1600,
    "height": 1066,
    "imageSrcset": "assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e-thumb.jpg 520w, assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e.jpg 1600w",
    "imageSizes": "(min-width: 1050px) 28vw, (min-width: 600px) 90vw, calc(100vw - 40px)"
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
