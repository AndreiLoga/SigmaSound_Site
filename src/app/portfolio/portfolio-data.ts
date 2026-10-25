export interface EventPhoto {
  image: string;
  thumbnail: string;
  width: number;
  height: number;
  imageWidth: number;
  imageHeight: number;
}

export interface PortfolioEvent {
  id: string;
  title: string;
  year: number | null;
  photos: EventPhoto[];
}

// All current event-folder images, in natural filename order.
// Event names remain Romanian in both locales; years come from folder names.
// Optimized filenames use source SHA-256 so changed originals cannot reuse stale URLs.
export const portfolioEvents: PortfolioEvent[] = [
  {
    "id": "ziua-orasului-satu-mare-2026",
    "title": "Ziua Orașului Satu Mare",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/65ff6a71f54dac810e7bd2e1.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/65ff6a71f54dac810e7bd2e1-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/6c8e0dc139b80fe2f8673790.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/6c8e0dc139b80fe2f8673790-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/dae29f3a74fb5d1b2271d17e-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/76359c78a96ddb2ad198d410.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/76359c78a96ddb2ad198d410-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/b4475a244d72457c1b6ca999.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/b4475a244d72457c1b6ca999-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/83f87b0328807adc26b9d93e.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/83f87b0328807adc26b9d93e-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "ziua-orasului-ardud-2026",
    "title": "Ziua Orașului Ardud",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/36d1af775537067600f06093.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/36d1af775537067600f06093-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/a7d71b2d48f11ca6ee5498d2.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/a7d71b2d48f11ca6ee5498d2-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/dc7570ee732b1554246002e7.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/dc7570ee732b1554246002e7-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/14d8f2def235330bf611b64b.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/14d8f2def235330bf611b64b-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/8bbbdbf8b69c66be910b3cae.jpg",
        "imageWidth": 1600,
        "imageHeight": 1066,
        "thumbnail": "assets/poze galerie/optimized/v3/8bbbdbf8b69c66be910b3cae-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/75897dff10cdd5db97b6cef0.jpg",
        "imageWidth": 1066,
        "imageHeight": 1600,
        "thumbnail": "assets/poze galerie/optimized/v3/75897dff10cdd5db97b6cef0-thumb.jpg",
        "width": 347,
        "height": 520
      }
    ]
  },
  {
    "id": "cupa-satmarului-2026",
    "title": "Cupa Sătmarului",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/d0fd2680e835c6098aa8b9a6.jpg",
        "imageWidth": 1600,
        "imageHeight": 1202,
        "thumbnail": "assets/poze galerie/optimized/v3/d0fd2680e835c6098aa8b9a6-thumb.jpg",
        "width": 520,
        "height": 391
      },
      {
        "image": "assets/poze galerie/optimized/v3/dadba6e770ecf2642ab9d3a6.jpg",
        "imageWidth": 1600,
        "imageHeight": 1202,
        "thumbnail": "assets/poze galerie/optimized/v3/dadba6e770ecf2642ab9d3a6-thumb.jpg",
        "width": 520,
        "height": 391
      },
      {
        "image": "assets/poze galerie/optimized/v3/14d75a2a43934d5576cc1806.jpg",
        "imageWidth": 1600,
        "imageHeight": 1202,
        "thumbnail": "assets/poze galerie/optimized/v3/14d75a2a43934d5576cc1806-thumb.jpg",
        "width": 520,
        "height": 391
      }
    ]
  },
  {
    "id": "festivalul-folcloric-bogdand-2026",
    "title": "Festivalul Folcloric Bogdand",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/f99f09a8f795560e4bd48570.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/f99f09a8f795560e4bd48570-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "festivalul-folcloric-oteloaia-2026",
    "title": "Festivalul Folcloric Oțeloaia",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/dda58124b4352eeea58e0342.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/dda58124b4352eeea58e0342-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/e66862927bd3cb0f62c0b0cb.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/e66862927bd3cb0f62c0b0cb-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "festivalul-folcloric-sambra-oilor-2026",
    "title": "Festivalul Folcloric Sâmbra Oilor",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/566a0356071c6bb775601fe7.jpg",
        "imageWidth": 1440,
        "imageHeight": 1080,
        "thumbnail": "assets/poze galerie/optimized/v3/566a0356071c6bb775601fe7-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/8ba19d5b8dfe5f6ab2e534eb.jpg",
        "imageWidth": 1440,
        "imageHeight": 1080,
        "thumbnail": "assets/poze galerie/optimized/v3/8ba19d5b8dfe5f6ab2e534eb-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/3b4703ffca70d9a2dbd242d6.jpg",
        "imageWidth": 1440,
        "imageHeight": 1080,
        "thumbnail": "assets/poze galerie/optimized/v3/3b4703ffca70d9a2dbd242d6-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "festivalul-rozmarin-in-coltu-mesii-2026",
    "title": "Festivalul Rozmarin în colțu mesii",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/c322161f5a65938304aac782.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/c322161f5a65938304aac782-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/456bd6f514ea59fd6d7c4f70.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/456bd6f514ea59fd6d7c4f70-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/d80204878510be7f9a32421f.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/d80204878510be7f9a32421f-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "open-air-symphony-2026",
    "title": "Open Air Symphony",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/0a829f3898a588be53a0a58b.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/0a829f3898a588be53a0a58b-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/6311933e95b2d31f2fc6741b.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/6311933e95b2d31f2fc6741b-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/7230cf05a97f207b1196e806.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/7230cf05a97f207b1196e806-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/523fc05baec2601d756caf6d.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/523fc05baec2601d756caf6d-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/5ebc1cb24e108bb4bc2e80e0.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/5ebc1cb24e108bb4bc2e80e0-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/ff9bebb0ffc6852283471c84.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/ff9bebb0ffc6852283471c84-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "regal-folcloric-impreuna-vedem-2026",
    "title": "Regal folcloric – Împreună vedem",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/00730bd2a30ac76ebeb74533.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/00730bd2a30ac76ebeb74533-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/402e7763f69a3970369b5a94.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/402e7763f69a3970369b5a94-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/8de1069f87451dcd0345f980.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/8de1069f87451dcd0345f980-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/4bfa909efb0f857d5376fc32.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/4bfa909efb0f857d5376fc32-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/8ba88a9e4291faa635119b31.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/8ba88a9e4291faa635119b31-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "street-music-festival-2026",
    "title": "Street Music Festival",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/d4905841fd6fe106f28c37d0.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/d4905841fd6fe106f28c37d0-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/b349e91804fd87b32f23acfb.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/b349e91804fd87b32f23acfb-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/d047f5f6c76b4448ece73457.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/d047f5f6c76b4448ece73457-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "zilele-iancului-2026",
    "title": "Zilele Iancului",
    "year": 2026,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/1592eea1ddc1e3d7f5505168.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/1592eea1ddc1e3d7f5505168-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/8e4e61d4453e36a6cbfb603f.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/8e4e61d4453e36a6cbfb603f-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/cf06b928ac04e7a225352048.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/cf06b928ac04e7a225352048-thumb.jpg",
        "width": 520,
        "height": 390
      }
    ]
  },
  {
    "id": "balul-caritabil-interact-2025",
    "title": "Balul Caritabil Interact",
    "year": 2025,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/e3fac2117ff6e609e5d9d832.jpg",
        "imageWidth": 1364,
        "imageHeight": 908,
        "thumbnail": "assets/poze galerie/optimized/v3/e3fac2117ff6e609e5d9d832-thumb.jpg",
        "width": 520,
        "height": 346
      },
      {
        "image": "assets/poze galerie/optimized/v3/5ea2caa0a9e5c06fd56962b0.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/5ea2caa0a9e5c06fd56962b0-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/8c6aad214393c3b66a1671f5.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/8c6aad214393c3b66a1671f5-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/75c1213f32984915608e3612.jpg",
        "imageWidth": 1440,
        "imageHeight": 810,
        "thumbnail": "assets/poze galerie/optimized/v3/75c1213f32984915608e3612-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/00838eae655ed39d6934812c.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/00838eae655ed39d6934812c-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/309b054e281dd640f54299d3.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/309b054e281dd640f54299d3-thumb.jpg",
        "width": 520,
        "height": 293
      }
    ]
  },
  {
    "id": "gala-loga-dance-school-2025",
    "title": "Gala Loga Dance School",
    "year": 2025,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/fe4fc0b28ec9310d4a3772eb.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/fe4fc0b28ec9310d4a3772eb-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/12dd393f3f8ddb8299cae7bc.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/12dd393f3f8ddb8299cae7bc-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/58e2c963639557ddd313aa94.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/58e2c963639557ddd313aa94-thumb.jpg",
        "width": 520,
        "height": 293
      }
    ]
  },
  {
    "id": "street-music-festival-2025",
    "title": "Street Music Festival",
    "year": 2025,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/92a0ae12cd6cdb3e2fc8ff2b.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/92a0ae12cd6cdb3e2fc8ff2b-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/cdc30311217cef050afb5179.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/cdc30311217cef050afb5179-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/fd74994095064e3b5f30facf.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/fd74994095064e3b5f30facf-thumb.jpg",
        "width": 520,
        "height": 347
      }
    ]
  },
  {
    "id": "ziua-orasului-satu-mare-2025",
    "title": "Ziua Orașului Satu Mare",
    "year": 2025,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/db43b757c6e6b6c1135f5c83.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/db43b757c6e6b6c1135f5c83-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/ce34c713cc5d6d53ad58a7c6.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/ce34c713cc5d6d53ad58a7c6-thumb.jpg",
        "width": 520,
        "height": 347
      },
      {
        "image": "assets/poze galerie/optimized/v3/af33ec9d867f4a13bbbecb3c.jpg",
        "imageWidth": 1600,
        "imageHeight": 1067,
        "thumbnail": "assets/poze galerie/optimized/v3/af33ec9d867f4a13bbbecb3c-thumb.jpg",
        "width": 520,
        "height": 347
      }
    ]
  },
  {
    "id": "medieval-ardud-2023",
    "title": "Medieval Ardud",
    "year": 2023,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/d2ca69525f8cb969c30bc519.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/d2ca69525f8cb969c30bc519-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/a55583e3e211c7e6bdc406e7.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/a55583e3e211c7e6bdc406e7-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/b62d3a51ea18bde5675c6c2f.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/b62d3a51ea18bde5675c6c2f-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/bef0cfa20b47d0fa98bf9bd1.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/bef0cfa20b47d0fa98bf9bd1-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/5dbdacbab16a0c3b2d22ae3a.jpg",
        "imageWidth": 1600,
        "imageHeight": 1200,
        "thumbnail": "assets/poze galerie/optimized/v3/5dbdacbab16a0c3b2d22ae3a-thumb.jpg",
        "width": 520,
        "height": 390
      },
      {
        "image": "assets/poze galerie/optimized/v3/68d1babdd0a900effa9ad287.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/68d1babdd0a900effa9ad287-thumb.jpg",
        "width": 520,
        "height": 293
      }
    ]
  },
  {
    "id": "ziua-orasului-ardud-2023",
    "title": "Ziua Orașului Ardud",
    "year": 2023,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/e274d829d2db4aefb9969073.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/e274d829d2db4aefb9969073-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/48e3c378e8758ceb95dd69db.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/48e3c378e8758ceb95dd69db-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/bd6ffcf9dd6f324cc36a0038.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/bd6ffcf9dd6f324cc36a0038-thumb.jpg",
        "width": 520,
        "height": 293
      }
    ]
  },
  {
    "id": "cupa-satmarului-2022",
    "title": "Cupa Sătmarului",
    "year": 2022,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/c0da0e18e8758c1bd7826b85.jpg",
        "imageWidth": 1600,
        "imageHeight": 720,
        "thumbnail": "assets/poze galerie/optimized/v3/c0da0e18e8758c1bd7826b85-thumb.jpg",
        "width": 520,
        "height": 234
      },
      {
        "image": "assets/poze galerie/optimized/v3/dd6d0ba26d764d3200ce2d72.jpg",
        "imageWidth": 1440,
        "imageHeight": 754,
        "thumbnail": "assets/poze galerie/optimized/v3/dd6d0ba26d764d3200ce2d72-thumb.jpg",
        "width": 520,
        "height": 272
      }
    ]
  },
  {
    "id": "medieval-ardud-2022",
    "title": "Medieval Ardud",
    "year": 2022,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/94f3854d1d837b12973c8c26.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/94f3854d1d837b12973c8c26-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/edb7e9670d4ab7cf7f049914.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/edb7e9670d4ab7cf7f049914-thumb.jpg",
        "width": 520,
        "height": 293
      },
      {
        "image": "assets/poze galerie/optimized/v3/6fc23e0bf883cb003baaf8ce.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/6fc23e0bf883cb003baaf8ce-thumb.jpg",
        "width": 520,
        "height": 293
      }
    ]
  },
  {
    "id": "ziua-orasului-ardud-2022",
    "title": "Ziua Orașului Ardud",
    "year": 2022,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/6d72aa9bc1898d1c8b1a9a35.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/6d72aa9bc1898d1c8b1a9a35-thumb.jpg",
        "width": 520,
        "height": 292
      },
      {
        "image": "assets/poze galerie/optimized/v3/9aec8b5eb6f1f034460a73e3.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/9aec8b5eb6f1f034460a73e3-thumb.jpg",
        "width": 520,
        "height": 292
      },
      {
        "image": "assets/poze galerie/optimized/v3/8750edba2b016997130ed23f.jpg",
        "imageWidth": 1600,
        "imageHeight": 900,
        "thumbnail": "assets/poze galerie/optimized/v3/8750edba2b016997130ed23f-thumb.jpg",
        "width": 520,
        "height": 292
      }
    ]
  },
  {
    "id": "medieval-ardud-2021",
    "title": "Medieval Ardud",
    "year": 2021,
    "photos": [
      {
        "image": "assets/poze galerie/optimized/v3/f68d19b41150253e8892d218.jpg",
        "imageWidth": 959,
        "imageHeight": 539,
        "thumbnail": "assets/poze galerie/optimized/v3/f68d19b41150253e8892d218-thumb.jpg",
        "width": 520,
        "height": 292
      },
      {
        "image": "assets/poze galerie/optimized/v3/5b27f0bad91cb0df8d39b560.jpg",
        "imageWidth": 1600,
        "imageHeight": 720,
        "thumbnail": "assets/poze galerie/optimized/v3/5b27f0bad91cb0df8d39b560-thumb.jpg",
        "width": 520,
        "height": 234
      },
      {
        "image": "assets/poze galerie/optimized/v3/92e486ab0fde9c90f7cc1474.jpg",
        "imageWidth": 1422,
        "imageHeight": 640,
        "thumbnail": "assets/poze galerie/optimized/v3/92e486ab0fde9c90f7cc1474-thumb.jpg",
        "width": 520,
        "height": 234
      }
    ]
  }
];
