# Sigma Sound

Site de prezentare Angular 20 standalone, TypeScript și SCSS, bilingv RO/EN. Node verificat: v24.21.0; manager de pachete: npm. Nu există scripturi lint/test în proiect.

## Instalare și rulare

```powershell
npm.cmd ci
npm.cmd start
```

Implicit: http://localhost:4200. Pentru alt port: `npm.cmd start -- --port 4312`.

```powershell
npm.cmd run build
npm.cmd audit
```

Publicați numai conținutul `dist/sigma-sound-site/browser/`. Nu publicați rădăcina proiectului, `node_modules`, `.git`, `.env`, fotografiile brute sau `Codex_work/`. Serverul de dezvoltare nu este destinat publicării pe internet.

## Structură

- `src/app/home/`: pagina principală, servicii, preview galerie și contact.
- `src/app/portfolio/`: pagina Galerie, albume și dialogul foto.
- `src/app/legal/`: documente RO/EN privind confidențialitatea, cookies și datele firmei.
- `src/app/scroll-reveal.directive.ts`: apariții la scroll, cu reduced motion și focus accesibil.
- `src/app/site-data.ts`: conținut servicii și datele de contact confirmate.
- `src/app/locale.service.ts`, `translations.ts`: traduceri și metadate.

## Fotografii publicate

Galeria reflectă 76 fotografii în 21 albume, după eliminarea surselor șterse de utilizator. Originalele se păstrează pentru lucru local; nu sunt publicate.

Configurația de assets include numai JPEG-urile optimizate din `poze galerie/optimized/v3` (cu excluderi explicite pentru copiile retrase), cele două fotografii hero din `poze galerie/web` și brandingul din `poze galerie/poze icon`. Nu se copiază integral folderele cu originale. La modificarea fotografiilor trebuie sincronizate datele galeriei și lista de excluderi; o imagine retrasă nu trebuie să rămână accesibilă ca asset public. Copiile publice verificate nu au EXIF/GPS.

## Securitate și publicare

Angular a fost actualizat în seria 20.3 pentru corecții de securitate. Override-urile `webpack-dev-middleware@7.4.6` și `sockjs > uuid@11.1.1` corectează dependențe tranzitive ale uneltelor de dezvoltare, fără migrare la Angular 21. SockJS folosește API-ul v4 compatibil; reconsiderați override-urile când pachetele părinte includ corecțiile. `npm.cmd audit` nu raportează vulnerabilități la verificarea din 25.10.2026; auditul trebuie repetat periodic.

Buildul de producție activează CSP automat bazat pe hashuri pentru scripturi. Nu adăugați nonce-uri fixe. Politica referrer este `no-referrer`. Headerele complementare trebuie configurate la hosting și testate: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` și CSP cu `frame-ancestors 'none'`, `form-action 'none'`, `object-src 'none'`, `base-uri 'self'`. Un CSP suplimentar nu trebuie să blocheze scripturile autorizate de politica generată: nu suprapuneți un `default-src`/`script-src` incompatibil.

HTTPS obligatoriu pentru publicare; HSTS se activează numai după verificarea HTTPS și a subdomeniilor vizate. Sunt necesare MFA la conturile administrative, backup și o probă de restaurare. Nu se includ credențiale în surse sau în bundle.

Configurați fallback la `index.html` pentru rutele aplicației: `/galerie`, `/portofoliu`, `/confidentialitate`, `/cookies`, `/informatii-legale`. URL-urile de asset inexistente și fișierele private trebuie să întoarcă 404/403, nu conținutul aplicației. `/portofoliu` redirecționează în aplicație la `/galerie`.

## Confidențialitate și informații legale

Aplicația nu are formular, conturi, plăți, analytics, widgeturi sociale sau cookies. Limba este ținută numai în memorie. Linkurile sociale sunt simple linkuri externe. Nu se adaugă un banner de acceptare pentru instrumente inexistente. Domeniul final trebuie reverificat pentru eventuale cookies/scripturi introduse de hosting/CDN.

Paginile legale sunt **documente în pregătire**, marcate ca atare. Câmpurile `[TODO]` necesită datele juridice ale firmei, furnizorii, logurile, retenția, destinatarii/transferurile și temeiurile reale. Nu reprezintă o confirmare de conformitate finală. Dreptul de utilizare a fotografiilor a fost confirmat de utilizator; dovezile și temeiurile pentru persoanele identificabile se documentează separat.

Footerul include linkurile către documente și ANPC. Pagina legală include și legătura SAL actuală; aplicabilitatea și afișarea pictogramei oficiale pe homepage trebuie finalizate după confirmarea relației cu consumatorii. Nu folosiți vechiul link SOL/ODR, platformă desființată.

Domeniul public și hostingul nu au fost confirmate. Headerele, TLS, logurile, backupurile și eventuala expunere a fișierelor vechi pe server nu sunt încă verificate public. Fișierul istoric `php_info11.php` a fost eliminat din proiect pentru a preveni publicarea unui endpoint de diagnostic.
