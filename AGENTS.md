# SigmaSound site

Site de prezentare pentru o firmă de închiriere scenă, sunet, lumini și LED pentru evenimente mari, indoor și outdoor. Nu facem nunți, botezuri sau majorate. Ton profesional și tehnic.

## Stack și structură
- Rămâi la tehnologiile existente (HTML/CSS/JS și/sau React). Nu migra și nu adăuga build tools noi.
- Păstrează stilul vizual existent (fundal, culori, fonturi). Inspirația generală este topsound.ro, doar ca idee de layout; nu copia texte, imagini sau cod.

## Limbă
- Site bilingv: română (implicit) și engleză. Tot textul vizibil există în ambele limbi.
- Română cu diacritice corecte.

## Node.js
- Proiectul folosește Node.js. Citește `package.json` (și `package-lock.json`, `yarn.lock` sau `pnpm-lock.yaml`) ca să afli managerul de pachete, versiunea de Node și scripturile disponibile (`dev`, `build`, `start`, `test`, `lint`).
- Folosește același manager de pachete ca proiectul. Nu schimba între npm, yarn și pnpm.
- Nu actualiza versiunea de Node sau dependențele existente fără motiv clar.
- Înainte de fiecare commit, rulează scripturile `build` și `lint` (dacă există) și corectează erorile.
- Nu comite `node_modules/`, fișiere `.env` sau foldere de build; verifică că sunt în `.gitignore`.
- La final, în raport scrie comenzile exacte de instalare și pornire locală.

## Git
- Lucrează pe branch separat (`feature/...`), niciodată direct pe `main`.
- Un commit per funcție sau pas logic, apoi `git push`.
- Mesaje de commit în engleză, conventional commits: `feat:`, `fix:`, `style:`, `docs:`.
- Fără `git push --force`, fără rescrierea istoricului, fără ștergerea branch-urilor.

## Interdicții
- Nu șterge și nu redenumi fișiere fără motiv clar, notat în commit.
- Nu adăuga dependențe fără justificare; preferă soluții fără biblioteci.
- Nu inventa date de contact, prețuri, clienți sau evenimente. Folosește `[TODO: ...]` vizibil.
- Nu atinge fișiere de configurare, chei sau credențiale.

## Calitate (minim înainte de orice commit)
- Responsive, mobile first.
- HTML semantic, contrast bun, atribute `alt`, navigare cu tastatura.
- SEO de bază: title, meta description, Open Graph, heading-uri corecte.
- Imagini optimizate.

## Fișiere auxiliare
- Orice fișier care nu face parte din site (note, planuri, rapoarte, scripturi de test, capturi de ecran, loguri, fișiere temporare) se creează doar în `Codex_work/`.
- `Codex_work/` este exclus din git. Nu îl adăuga niciodată la commit (nu folosi `git add -f`, verifică `git status` înainte de fiecare commit).
- Raportul final îl salvezi în `Codex_work/RAPORT.md`.
- Nu crea fișiere auxiliare în rădăcina proiectului sau în folderele site-ului.

## Design
- Dacă skill-ul `frontend-design` este disponibil, urmează-l pentru toate deciziile vizuale.