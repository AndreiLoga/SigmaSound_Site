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

// Optimized from poze galerie/hero, in filename order; framing follows each photo.
export const heroImages = [
  {
    "image": "assets/poze galerie/optimized/v3/47bd68684fcbfceed3c6fde0-hero.jpg",
    "srcset": "assets/poze%20galerie/optimized/v3/47bd68684fcbfceed3c6fde0-hero-small.jpg 960w, assets/poze%20galerie/optimized/v3/47bd68684fcbfceed3c6fde0-hero.jpg 1600w",
    "width": 1600,
    "height": 900,
    "position": "60% 50%",
    "mobilePosition": "60% 50%"
  },
  {
    "image": "assets/poze galerie/optimized/v3/b4475a244d72457c1b6ca999-hero.jpg",
    "srcset": "assets/poze%20galerie/optimized/v3/b4475a244d72457c1b6ca999-hero-small.jpg 960w, assets/poze%20galerie/optimized/v3/b4475a244d72457c1b6ca999-hero.jpg 1920w",
    "width": 1920,
    "height": 1281,
    "position": "40% 45%",
    "mobilePosition": "40% 45%"
  },
  {
    "image": "assets/poze galerie/optimized/v3/a02ad641d9d2d7e3e99aeb05-hero.jpg",
    "srcset": "assets/poze%20galerie/optimized/v3/a02ad641d9d2d7e3e99aeb05-hero-small.jpg 960w, assets/poze%20galerie/optimized/v3/a02ad641d9d2d7e3e99aeb05-hero.jpg 1600w",
    "width": 1600,
    "height": 900,
    "position": "50% 50%",
    "mobilePosition": "50% 50%"
  },
  {
    "image": "assets/poze galerie/optimized/v3/5923eac2871f59413459381b-hero.jpg",
    "srcset": "assets/poze%20galerie/optimized/v3/5923eac2871f59413459381b-hero-small.jpg 960w, assets/poze%20galerie/optimized/v3/5923eac2871f59413459381b-hero.jpg 1600w",
    "width": 1600,
    "height": 900,
    "position": "50% 50%",
    "mobilePosition": "50% 50%"
  },
  {
    "image": "assets/poze galerie/optimized/v3/83f87b0328807adc26b9d93e-hero.jpg",
    "srcset": "assets/poze%20galerie/optimized/v3/83f87b0328807adc26b9d93e-hero-small.jpg 960w, assets/poze%20galerie/optimized/v3/83f87b0328807adc26b9d93e-hero.jpg 1920w",
    "width": 1920,
    "height": 1440,
    "position": "50% 35%",
    "mobilePosition": "50% 35%"
  }
];

export const services: ServiceLine[] = [
  {
    "title": "Scenă",
    "lead": "Închiriem și montăm scene pentru concerte, festivaluri și evenimente publice, în interior și în aer liber. Configurăm scena și structurile de susținere în funcție de spațiu și de cerințele producției.",
    "capabilities": [
      "Stages and structures",
      "Installation and dismantling",
      "Indoors and outdoors"
    ],
    "equipment": [
      "scene mobile",
      "structuri aluminiu",
      "transport tehnic"
    ],
    "image": "assets/poze galerie/optimized/v3/83f87b0328807adc26b9d93e.jpg",
    "imageAlt": "Ziua Orașului Satu Mare 2026",
    "width": 1600,
    "height": 1200,
    "imageSrcset": "assets/poze%20galerie/optimized/v3/83f87b0328807adc26b9d93e-thumb.jpg 520w, assets/poze%20galerie/optimized/v3/83f87b0328807adc26b9d93e.jpg 1600w",
    "imageSizes": "(min-width: 1050px) 28vw, (min-width: 600px) 90vw, calc(100vw - 40px)"
  },
  {
    "title": "Sunet",
    "lead": "Asigurăm sonorizarea pentru public și monitorizarea pentru artiști, cu sisteme audio adaptate locației și numărului de participanți. Ne ocupăm de instalare, probe de sunet și mixaj pe durata evenimentului.",
    "capabilities": [
      "Line-array systems",
      "Live mixing",
      "Stage monitors",
      "Soundchecks"
    ],
    "equipment": [
      "DAS Audio Event-210A",
      "DAS Audio Event-218A",
      "Yamaha TF5",
      "Yamaha TF1"
    ],
    "image": "assets/poze galerie/optimized/v3/dadba6e770ecf2642ab9d3a6.jpg",
    "imageAlt": "Boxe line-array suspendate într-o configurație de sonorizare indoor",
    "width": 1600,
    "height": 1202,
    "imageSrcset": "assets/poze%20galerie/optimized/v3/dadba6e770ecf2642ab9d3a6-thumb.jpg 520w, assets/poze%20galerie/optimized/v3/dadba6e770ecf2642ab9d3a6.jpg 1600w",
    "imageSizes": "(min-width: 1050px) 46vw, (min-width: 600px) 148vw, calc((100vw - 40px) * 1.65)"
  },
  {
    "title": "Lumini",
    "lead": "Configurăm iluminatul scenei pentru vizibilitatea artiștilor și atmosfera spectacolului. Combinăm lumini beam, wash și efecte de scenă, cu programare și operare adaptate fiecărui moment din eveniment.",
    "capabilities": [
      "Stage lighting",
      "Beam, wash and effects",
      "Live operation"
    ],
    "equipment": [
      "Fos Beam 7r Hybrid Plus",
      "Fos Odeum Wash",
      "Fos Cyclone RGB 2",
      "Stairville MH-X 200",
      "Fos Stage Haze",
      "Showtec Stage Blinder"
    ],
    "image": "assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e.jpg",
    "imageAlt": "Ziua Orașului Satu Mare 2026",
    "width": 1600,
    "height": 1066,
    "imageSrcset": "assets/poze%20galerie/optimized/v3/dae29f3a74fb5d1b2271d17e-thumb.jpg 520w, assets/poze%20galerie/optimized/v3/dae29f3a74fb5d1b2271d17e.jpg 1600w",
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
    items: ['Yamaha TF5', 'Yamaha TF1', 'Yamaha MG332-14 FX', 'Yamaha MG166 CX']
  },
  {
    title: 'Lumini',
    items: ['Fos Beam 7r Hybrid Plus', 'Fos Odeum Wash', 'Fos Cyclone RGB 2', 'Stairville MH-X 200', 'Fos Stage Haze', 'Showtec Stage Blinder']
  },
  {
    title: 'Microfoane & efecte',
    items: ['Shure SM58', 'Shure SM57', 'Shure BETA 52A', 'hazer', 'fum greu']
  }
];



export interface ContactChannel {
  label: string;
  links: { value: string; href: string }[];
}

export const contactChannels: ContactChannel[] = [
  { label: 'Telefon', links: [
    { value: '0744 125 740', href: 'tel:+40744125740' },
    { value: '0744 845 891', href: 'tel:+40744845891' }
  ] },
  { label: 'Email', links: [
    { value: 'vaviloga76@gmail.com', href: 'mailto:vaviloga76@gmail.com' }
  ] }
];
