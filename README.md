# Sigma Sound

Restructurare modernă a site-ului Sigma Sound ca aplicație Angular standalone.

## Rulare locală

```bash
npm install
npm start
```

Aplicația pornește implicit pe `http://localhost:4200`.

## Structură

- `src/app/app.component.ts` ține datele pentru servicii, echipamente și galerie.
- `src/app/app.component.html` definește experiența de pagină: hero, servicii, echipamente, galerie, contact.
- `src/app/app.component.scss` conține designul responsive.
- Folderele `poze` și `poze galerie` sunt mapate ca asset-uri Angular în `angular.json`.

## Observație

În acest workspace, comanda `npm` e momentan stricată deoarece caută `npm-cli.js` într-un path Roaming care nu există. După repararea instalării Node/npm, comenzile de mai sus ar trebui să fie suficiente.
