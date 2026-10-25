# Sigma Sound

Site de prezentare Angular 20 standalone, TypeScript și SCSS, bilingv RO/EN. Node verificat: v24.21.0; manager de pachete: npm. Nu există scripturi lint/test în proiect.

## Instalare și rulare

```powershell
npm.cmd ci
npm.cmd start
```

Varianta final? este pe branch-ul `main` ?i ruleaz? la http://localhost:4200.

Aplica?ia are o singur? versiune a paginii principale; nu exist? selector sau rute pentru variante alternative.

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

## Confidențialitate și informații despre site

Domeniu confirmat: https://www.sigmasound.ro/ . Găzduire confirmată de utilizator: Claus Web. Pe domeniu este activă încă versiunea veche. Codul nou nu a fost încărcat pe hosting.

Aplicația nouă nu are formular, conturi, plăți, analytics sau widgeturi sociale și nu păstrează limba în storage. La prima încărcare pe sigmasound.ro/www.sigmasound.ro elimină cookies Google Analytics accesibile `_ga` și `_ga_ZMB567ZTWB`, observate în vechiul site. Nu atinge alte cookies. Dacă browserul blochează accesul la cookies, aplicația continuă să funcționeze. Nu se adaugă banner pentru tracking nefolosit.

Paginile RO/EN /confidentialitate, /cookies și /informatii-legale au fost curățate de marcajele de lucru. Ele descriu aplicația reală, contactul, Claus Web, Gmail și platformele sociale; perioadele de păstrare sunt exprimate prin criterii, fără numere inventate pentru logurile hostingului. Nu se pretinde că avem un DPA semnat, o anumită configurație a logurilor sau documente fotografice neprezentate.

**Limită juridică cunoscută:** utilizatorul a refuzat furnizarea/publicarea identității juridice și a datelor firmei. Acestea nu au fost inventate sau căutate din alte surse. Eliminarea marcajelor de lucru nu îndeplinește obligațiile de identificare/informare; nu se declară conformitate GDPR/legală completă. Această limită a fost comunicată utilizatorului. Confirmarea temeiurilor și a fluxurilor interne, retenția efectivă și contractele cu furnizorii țin și de activitatea operatorului, nu doar de codul site-ului.

Footerul include linkurile către pagini, ANPC și un link text SAL spre https://reclamatiisal.anpc.ro/ . Pictograma a fost eliminată la cererea utilizatorului pentru alinierea subsolului; cerința de afișare a modelului oficial, unde este aplicabilă, trebuie reevaluată înainte de lansare. Nu se folosește vechiul link SOL/ODR.

## Fișiere pentru Claus Web și migrare

Buildul include `.htaccess` pentru Apache 2.4/LiteSpeed compatibil: headere complementare CSP, blocarea fișierelor private și PHP, fără listare de directoare, rutarea paginilor Angular și 404 pentru asseturi inexistente. `/evenimente.html` și `/portofoliu` redirecționează spre Galerie; `/index.html` este compatibil cu aplicația. Sunt incluse robots.txt și sitemap.xml pentru domeniul confirmat, plus canonical/og:url actualizate pe rută.

Configurația `.htaccess` este pregătită, dar nu a fost executată de un Apache/LiteSpeed local sau verificată pe contul Claus Web. Validarea aplicației și a headerelor a fost realizată cu un server static local echivalent pentru teste. La publicare, regulile trebuie integrate cu eventualele directive existente ale contului și verificate pe server. HTTPS/HSTS, redirecționarea canonică HTTP/apex, backupurile, accesul și logurile trebuie confirmate în hosting. Nu au fost schimbate DNS, emailuri, conturi sau configurații externe.

Publicarea trebuie precedată de un backup al site-ului vechi și urmată de curățarea fișierelor și cache-urilor retrase. Nu copiați întregul repository și nu ștergeți alte date ale contului de hosting. Fișierul de diagnostic php_info11.php a fost eliminat din proiect; regulile pregătite blochează accesul PHP dacă rămân copii vechi în directorul web.
