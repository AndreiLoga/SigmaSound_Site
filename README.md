# Sigma Sound

Site de prezentare Sigma Sound, realizat cu Angular 20 standalone, TypeScript și SCSS. Include servicii de scenă, sunet și lumini, portofoliu, contact direct și interfață RO/EN (română implicit).

## Rulare locală

```bash
npm install
npm start
```

Aplicația pornește implicit pe `http://localhost:4200`.

Pe Windows, dacă PowerShell blochează `npm.ps1`, folosește `npm.cmd install`, `npm.cmd start` și `npm.cmd run build`.

Build de producție: `npm run build`. Fișierele generate sunt în `dist/sigma-sound-site/browser/`. Hostingul trebuie să redirecționeze rutele aplicației, inclusiv `/portofoliu`, la `index.html`.

Verificat cu Node.js v24.21.0 și npm 11.19.0. Proiectul nu definește scripturi `lint` sau `test`.

## Structură

- `src/app/app.component.*`: navigare, selector RO/EN și footer.
- `src/app/home/`: hero, servicii, echipamente, previzualizare galerie și contact direct.
- `src/app/portfolio/`: galerie cu selectarea fotografiei.
- `src/app/site-data.ts`: servicii, echipamente și fotografii.
- `src/app/locale.service.ts` și `translations.ts`: traduceri și metadate în funcție de limbă și pagină.
- `poze galerie/web/`: fotografii JPEG optimizate și miniaturi, utilizate de aplicație.
- Folderele `poze` și `poze galerie` sunt mapate ca asset-uri Angular în `angular.json`.

## Contact și conținut

Pagina nu conține formular sau endpoint de trimitere. Telefonul, emailul, WhatsApp și zona de acoperire sunt marcate TODO până la confirmare. În `src/app/site-data.ts`, `contactChannels` păstrează valori vizibile și URL-uri nullable. După confirmare, se completează împreună valoarea și URL-ul corect: `tel:`, `mailto:` sau `https://wa.me/`. Nu sunt create legături fictive pentru placeholder-e.

Domeniul de producție trebuie confirmat înainte de adăugarea unui sitemap, a adreselor canonical și a adreselor absolute pentru distribuirea socială. Aplicația este randată în browser; metadatele dinamice pot să nu fie citite de toate platformele sociale.
