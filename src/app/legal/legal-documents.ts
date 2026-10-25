export interface LegalText { ro: string; en: string; }
export interface LegalDocument {
  path: string;
  title: LegalText;
  description: LegalText;
  sections: { title: LegalText; paragraphs: LegalText[] }[];
}

export const legalDocuments: LegalDocument[] = [
  {
    path: '/confidentialitate',
    title: { ro: 'Confidențialitate', en: 'Privacy' },
    description: { ro: 'Informații despre prelucrarea datelor personale în legătură cu site-ul Sigma Sound.', en: 'Information about personal data processing in connection with the Sigma Sound website.' },
    sections: [
      { title: { ro: 'Cine răspunde de datele tale', en: 'Who is responsible for your data' }, paragraphs: [
        { ro: 'Operator: [TODO: denumirea juridică, forma juridică și sediul firmei care operează Sigma Sound]. Pentru întrebări sau solicitări privind datele personale ne poți scrie la vaviloga76@gmail.com.', en: 'Controller: [TODO: legal name, legal form and registered address of the company operating Sigma Sound]. For questions or requests about personal data, email vaviloga76@gmail.com.' }
      ] },
      { title: { ro: 'Când vizitezi site-ul', en: 'When you visit the website' }, paragraphs: [
        { ro: 'Aplicația de prezentare nu are conturi, formular de contact, plăți online sau instrumente de analiză și publicitate. Nu solicită acces la locația, camera sau microfonul dispozitivului tău.', en: 'This presentation website has no accounts, contact form, online payments, analytics or advertising tools. It does not request access to your device location, camera or microphone.' },
        { ro: 'Furnizorul de găzduire poate înregistra date tehnice, precum adresa IP, momentul accesării, resursa solicitată și informații despre browser, pentru livrarea și securitatea site-ului. [TODO: confirmarea furnizorului, datelor înregistrate, temeiului juridic și perioadei de păstrare a logurilor].', en: 'The hosting provider may record technical data such as IP address, access time, requested resource and browser information for website delivery and security. [TODO: confirm the provider, recorded data, legal basis and log retention period].' }
      ] },
      { title: { ro: 'Când ne contactezi', en: 'When you contact us' }, paragraphs: [
        { ro: 'Dacă ne contactezi prin telefon, email sau WhatsApp, putem primi numele, datele de contact și informațiile pe care ni le comunici despre eveniment. Le folosim pentru a răspunde solicitării, a pregăti oferta și a gestiona colaborarea. Trimite doar informațiile necesare solicitării tale.', en: 'If you contact us by phone, email or WhatsApp, we may receive your name, contact details and the event information you choose to share. We use these to answer your enquiry, prepare a quote and manage our work together. Please share only information needed for your enquiry.' },
        { ro: 'Când soliciți demersuri pentru încheierea unui contract în nume propriu, temeiul poate fi art. 6 alin. (1) lit. b) GDPR. Pentru comunicarea cu reprezentanții firmelor, temeiul poate fi interesul legitim de a răspunde solicitărilor profesionale, conform art. 6 alin. (1) lit. f). Obligațiile legale aplicabile se bazează pe art. 6 alin. (1) lit. c). [TODO: validarea temeiurilor și intereselor pentru fluxurile efective ale firmei].', en: 'When you request steps towards a contract in your own name, Article 6(1)(b) GDPR may apply. For communication with business representatives, the basis may be the legitimate interest in responding to business enquiries under Article 6(1)(f). Applicable legal obligations rely on Article 6(1)(c). [TODO: validate the legal bases and interests for the company’s actual processes].' },
        { ro: 'O solicitare de ofertă nu te înscrie automat la mesaje de marketing.', en: 'Requesting a quote does not automatically subscribe you to marketing messages.' }
      ] },
      { title: { ro: 'Furnizori și servicii externe', en: 'Providers and external services' }, paragraphs: [
        { ro: 'Linkurile WhatsApp, Instagram și Facebook deschid serviciile respective numai când alegi să le accesezi. Nu includem widgeturi sociale în pagină. Platformele și serviciul de email au propriile condiții și politici privind datele.', en: 'WhatsApp, Instagram and Facebook links open those services only when you choose to visit them. We do not embed social widgets. These platforms and the email service have their own terms and data policies.' },
        { ro: '[TODO: identificarea furnizorilor de găzduire și email, rolurilor lor, destinatarilor, eventualelor transferuri în afara SEE și garanțiilor aplicabile].', en: '[TODO: identify hosting and email providers, their roles, recipients, any transfers outside the EEA and applicable safeguards].' }
      ] },
      { title: { ro: 'Cât timp păstrăm datele', en: 'How long we keep data' }, paragraphs: [
        { ro: '[TODO: stabilirea perioadelor sau criteriilor reale de păstrare pentru solicitări de ofertă, corespondență, documente contractuale și loguri tehnice]. Perioadele trebuie corelate cu scopul prelucrării și obligațiile legale aplicabile.', en: '[TODO: establish actual retention periods or criteria for quote requests, correspondence, contractual records and technical logs]. Retention must reflect the processing purpose and applicable legal obligations.' }
      ] },
      { title: { ro: 'Fotografiile din galerie', en: 'Gallery photographs' }, paragraphs: [
        { ro: 'Galeria prezintă configurații tehnice și imagini de la evenimente. Dacă te recunoști într-o fotografie și ai o întrebare sau o solicitare privind utilizarea imaginii tale, scrie-ne la vaviloga76@gmail.com și indică evenimentul și fotografia. Analizăm solicitarea în raport cu drepturile tale și cadrul legal aplicabil.', en: 'The gallery shows technical setups and event photographs. If you recognise yourself in a photograph and have a question or request about use of your image, email vaviloga76@gmail.com with the event and photograph details. We assess requests in light of your rights and applicable law.' },
        { ro: '[TODO: documentarea temeiului publicării persoanelor identificabile și a informării acestora, inclusiv situațiile care implică minori].', en: '[TODO: document the basis for publishing identifiable individuals and informing them, including situations involving minors].' }
      ] },
      { title: { ro: 'Drepturile tale', en: 'Your rights' }, paragraphs: [
        { ro: 'În condițiile GDPR, poți solicita acces, rectificare, ștergere, restricționare sau portabilitate și te poți opune anumitor prelucrări. Când prelucrarea se bazează pe consimțământ, îl poți retrage fără a afecta legalitatea prelucrării anterioare. Drepturile se aplică potrivit condițiilor și excepțiilor legale.', en: 'Subject to GDPR conditions, you may request access, rectification, erasure, restriction or portability and object to certain processing. Where processing relies on consent, you may withdraw it without affecting the lawfulness of earlier processing. Rights are subject to legal conditions and exceptions.' },
        { ro: 'Trimite solicitarea la vaviloga76@gmail.com. Răspundem în termenul GDPR, în mod obișnuit o lună; eventualele prelungiri se aplică în condițiile legii și îți sunt comunicate. Poți depune o plângere la ANSPDCP, prin www.dataprotection.ro, și poți folosi căile judiciare disponibile.', en: 'Send your request to vaviloga76@gmail.com. We respond within the GDPR deadline, normally one month; any extension follows legal conditions and is communicated to you. You may lodge a complaint with ANSPDCP at www.dataprotection.ro and seek available judicial remedies.' }
      ] }
    ]
  },
  {
    path: '/cookies',
    title: { ro: 'Cookies și stocare', en: 'Cookies and storage' },
    description: { ro: 'Cum folosește aplicația Sigma Sound cookies și stocarea din browser.', en: 'How the Sigma Sound application uses cookies and browser storage.' },
    sections: [
      { title: { ro: 'Ce folosește aplicația', en: 'What the application uses' }, paragraphs: [
        { ro: 'Versiunea actuală a aplicației nu setează cookies și nu folosește localStorage, sessionStorage sau IndexedDB. Nu include Google Analytics, Meta Pixel sau alte instrumente de urmărire publicitară.', en: 'The current application does not set cookies or use localStorage, sessionStorage or IndexedDB. It does not include Google Analytics, Meta Pixel or other advertising tracking tools.' },
        { ro: 'Limba selectată este păstrată doar în memoria aplicației cât timp navighezi. Browserul poate păstra în cache fișierele site-ului pentru încărcare mai rapidă; acest cache nu este utilizat de noi pentru profilare.', en: 'Your selected language is held only in application memory while you browse. Your browser may cache website files for faster loading; we do not use that cache for profiling.' }
      ] },
      { title: { ro: 'Găzduire și servicii externe', en: 'Hosting and external services' }, paragraphs: [
        { ro: '[TODO: verificarea cookies și tehnologiilor de stocare introduse de hosting sau CDN pe domeniul final, înainte de publicare].', en: '[TODO: check cookies and storage technologies introduced by hosting or a CDN on the final domain before publication].' },
        { ro: 'Linkurile spre WhatsApp, Instagram și Facebook sunt linkuri obișnuite. Nu încarcă în pagină conținutul platformelor. După accesare, utilizarea datelor de către platforma aleasă este descrisă în politica acesteia.', en: 'Links to WhatsApp, Instagram and Facebook are ordinary links. They do not embed platform content in the page. Once you visit a platform, its policy describes how it uses your data.' }
      ] },
      { title: { ro: 'Alegerea ta', en: 'Your choice' }, paragraphs: [
        { ro: 'Pentru aplicația actuală, nu cerem acord pentru instrumente de urmărire pe care nu le folosim. Dacă adăugăm tehnologii neesențiale care necesită consimțământ, vom solicita alegerea ta înainte de activare și vom oferi refuzul și retragerea acordului.', en: 'For the current application, we do not ask you to agree to tracking tools we do not use. If we add non-essential technologies requiring consent, we will ask for your choice before activation and provide refusal and withdrawal options.' },
        { ro: 'Poți gestiona datele și cache-ul site-ului din setările browserului. Pentru întrebări, scrie-ne la vaviloga76@gmail.com.', en: 'You can manage site data and cache through your browser settings. For questions, email vaviloga76@gmail.com.' }
      ] }
    ]
  },
  {
    path: '/informatii-legale',
    title: { ro: 'Informații legale', en: 'Legal information' },
    description: { ro: 'Datele operatorului și informații despre site-ul de prezentare Sigma Sound.', en: 'Operator details and information about the Sigma Sound presentation website.' },
    sections: [
      { title: { ro: 'Operatorul site-ului', en: 'Website operator' }, paragraphs: [
        { ro: 'Denumire și formă juridică: [TODO: denumire juridică și formă juridică].', en: 'Legal name and form: [TODO: legal name and legal form].' },
        { ro: 'Sediu social: [TODO: sediu social].', en: 'Registered address: [TODO: registered address].' },
        { ro: 'Cod unic de înregistrare: [TODO: CUI]. Număr Registrul Comerțului: [TODO: număr RC].', en: 'Tax identification number: [TODO: CUI]. Trade Register number: [TODO: registration number].' },
        { ro: 'Capital social, dacă este aplicabil: [TODO: capital social].', en: 'Share capital, where applicable: [TODO: share capital].' },
        { ro: 'Contact: vaviloga76@gmail.com; 0744 125 740; 0744 845 891.', en: 'Contact: vaviloga76@gmail.com; +40 744 125 740; +40 744 845 891.' }
      ] },
      { title: { ro: 'Despre acest site', en: 'About this website' }, paragraphs: [
        { ro: 'Sigma Sound prezintă servicii de scenă, sonorizare și lumini pentru evenimente și fotografii din activitatea sa. Site-ul nu include comandă, rezervare sau plată online. Configurația tehnică, disponibilitatea și condițiile colaborării se stabilesc prin contact direct.', en: 'Sigma Sound presents stage, sound and lighting services for events and photographs from its work. The website has no online ordering, booking or payment. The technical setup, availability and terms of engagement are agreed through direct contact.' }
      ] },
      { title: { ro: 'Conținut și fotografii', en: 'Content and photographs' }, paragraphs: [
        { ro: 'Utilizarea imaginilor și textelor de către terți trebuie să respecte drepturile titularilor. Pentru solicitări privind conținutul sau o fotografie, contactează-ne la adresa de email de mai sus.', en: 'Third-party use of images and text must respect the rights of their holders. For content or photograph requests, contact us at the email address above.' }
      ] }
    ]
  }
];
