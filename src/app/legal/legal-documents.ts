export interface LegalText { ro: string; en: string; }
export interface LegalDocument {
  path: string;
  title: LegalText;
  description: LegalText;
  sections: { title: LegalText; paragraphs: LegalText[]; links?: { label: LegalText; href: string }[] }[];
}

export const legalDocuments: LegalDocument[] = [
  {
    "path": "/confidentialitate",
    "title": {
      "ro": "Confidențialitate",
      "en": "Privacy"
    },
    "description": {
      "ro": "Cum sunt folosite datele personale în legătură cu site-ul Sigma Sound și solicitările de contact.",
      "en": "How personal data is used in connection with the Sigma Sound website and contact enquiries."
    },
    "sections": [
      {
        "title": {
          "ro": "Site-ul și contactul pentru date personale",
          "en": "Website and privacy contact"
        },
        "paragraphs": [
          {
            "ro": "Această informare privește site-ul www.sigmasound.ro și comunicările adresate Sigma Sound. Pentru întrebări privind datele personale sau pentru exercitarea drepturilor tale, scrie la vaviloga76@gmail.com.",
            "en": "This notice concerns www.sigmasound.ro and communications addressed to Sigma Sound. For privacy questions or to exercise your rights, email vaviloga76@gmail.com."
          }
        ]
      },
      {
        "title": {
          "ro": "Datele pe care le putem primi",
          "en": "Data we may receive"
        },
        "paragraphs": [
          {
            "ro": "La navigare, infrastructura de găzduire poate prelucra adresa IP, momentul accesării, pagina sau fișierul solicitat și informații despre browser, pentru livrarea site-ului, diagnosticarea erorilor și prevenirea abuzurilor. Găzduirea este asigurată de Claus Web.",
            "en": "When you browse, the hosting infrastructure may process your IP address, access time, requested page or file and browser information for website delivery, error diagnosis and abuse prevention. Hosting is provided by Claus Web."
          },
          {
            "ro": "Dacă ne contactezi prin telefon, email sau WhatsApp, putem primi numele, datele de contact și detaliile despre eveniment pe care alegi să ni le comunici. Trimite doar informațiile necesare solicitării tale.",
            "en": "If you contact us by phone, email or WhatsApp, we may receive your name, contact details and the event information you choose to share. Please send only information needed for your enquiry."
          },
          {
            "ro": "Versiunea nouă a site-ului nu are conturi, formular de contact, plăți online, Google Analytics sau pixeli publicitari. Nu solicită acces la locația, camera sau microfonul dispozitivului.",
            "en": "The new website has no accounts, contact form, online payments, Google Analytics or advertising pixels. It does not request access to your device location, camera or microphone."
          }
        ]
      },
      {
        "title": {
          "ro": "Scopurile și temeiurile prelucrării",
          "en": "Purposes and legal bases"
        },
        "paragraphs": [
          {
            "ro": "Folosim informațiile din solicitări pentru a răspunde, a pregăti oferte și a stabili detaliile colaborării. Pentru demersurile contractuale cerute de o persoană în nume propriu, temeiul este art. 6 alin. (1) lit. b) GDPR. Pentru comunicarea cu reprezentanții firmelor, interesul legitim este gestionarea solicitărilor și a relațiilor profesionale, conform art. 6 alin. (1) lit. f).",
            "en": "We use enquiry information to reply, prepare quotes and discuss working together. Steps towards a contract requested by an individual in their own name rely on Article 6(1)(b) GDPR. For communication with business representatives, the legitimate interest is managing enquiries and business relationships under Article 6(1)(f)."
          },
          {
            "ro": "Livrarea și protejarea site-ului urmăresc interesul legitim de a menține un serviciu funcțional și de a preveni incidentele. Datele necesare îndeplinirii obligațiilor legale sunt prelucrate în temeiul art. 6 alin. (1) lit. c). O solicitare de ofertă nu te înscrie automat la mesaje de marketing.",
            "en": "Website delivery and protection pursue the legitimate interest in maintaining a working service and preventing incidents. Data needed to meet legal obligations is processed under Article 6(1)(c). Requesting a quote does not automatically subscribe you to marketing messages."
          }
        ]
      },
      {
        "title": {
          "ro": "Furnizori și destinatari",
          "en": "Providers and recipients"
        },
        "paragraphs": [
          {
            "ro": "Claus Web furnizează infrastructura de găzduire. Rolul său depinde de operațiune: pentru datele găzduite poate acționa ca persoană împuternicită, iar pentru propriile obligații și securitatea serviciului poate acționa separat, potrivit documentelor sale contractuale.",
            "en": "Claus Web provides hosting infrastructure. Its role depends on the operation: it may act as a processor for hosted data and separately for its own obligations and service security, as described in its contractual documents."
          },
          {
            "ro": "Adresa de contact folosește Gmail, serviciu Google. Dacă alegi WhatsApp, comunicarea se desfășoară prin serviciul respectiv. Linkurile Instagram și Facebook deschid platformele numai când le accesezi; nu includem widgeturi sociale în pagină.",
            "en": "The contact email address uses Gmail, a Google service. If you choose WhatsApp, communication takes place through that service. Instagram and Facebook links open those platforms only when you visit them; we do not embed social widgets."
          },
          {
            "ro": "Serviciile Google și Meta pot implica prelucrarea datelor în afara Spațiului Economic European. Informațiile despre țările, mecanismele de transfer și protecțiile oferite de fiecare serviciu sunt descrise în politicile furnizorilor. Datele pot fi comunicate și autorităților atunci când există o obligație legală.",
            "en": "Google and Meta services may involve processing outside the European Economic Area. Their policies describe the countries, transfer mechanisms and safeguards offered by each service. Data may also be disclosed to authorities where legally required."
          }
        ],
        "links": [
          {
            "label": {
              "ro": "Claus Web: confidențialitate",
              "en": "Claus Web: privacy"
            },
            "href": "https://www.clausweb.ro/confidentialitate.html"
          },
          {
            "label": {
              "ro": "Claus Web: acord de prelucrare a datelor",
              "en": "Claus Web: data processing agreement"
            },
            "href": "https://www.clausweb.ro/acord-prelucrare-date.html"
          },
          {
            "label": {
              "ro": "Google: confidențialitate",
              "en": "Google: privacy"
            },
            "href": "https://policies.google.com/privacy?hl=ro"
          },
          {
            "label": {
              "ro": "WhatsApp: confidențialitate",
              "en": "WhatsApp: privacy"
            },
            "href": "https://www.whatsapp.com/legal/privacy-policy-eea"
          }
        ]
      },
      {
        "title": {
          "ro": "Păstrarea datelor",
          "en": "Data retention"
        },
        "paragraphs": [
          {
            "ro": "Păstrăm informațiile din solicitări cât timp sunt necesare pentru răspuns, pregătirea ofertei și eventualele discuții de colaborare. Dacă se încheie un contract, documentele relevante se păstrează pe durata necesară executării sale și respectării obligațiilor legale sau apărării drepturilor. Corespondența fără utilitate pentru aceste scopuri nu trebuie păstrată pe termen nelimitat.",
            "en": "We retain enquiry information for as long as needed to reply, prepare a quote and discuss potential work. If a contract is concluded, relevant records are retained as needed to perform it, meet legal obligations or defend rights. Correspondence no longer useful for these purposes should not be kept indefinitely."
          },
          {
            "ro": "Păstrarea jurnalelor tehnice și a copiilor de siguranță depinde de configurația serviciului de găzduire și de necesitatea investigării incidentelor. Pentru informații despre datele care te privesc și criteriile aplicate situației tale, ne poți contacta la adresa de mai sus.",
            "en": "Technical log and backup retention depends on the hosting service configuration and any need to investigate incidents. You can contact us at the address above for information about your data and the criteria applied to your situation."
          }
        ]
      },
      {
        "title": {
          "ro": "Fotografiile din galerie",
          "en": "Gallery photographs"
        },
        "paragraphs": [
          {
            "ro": "Fotografiile prezintă configurații tehnice și evenimente la care a lucrat Sigma Sound. Dacă te recunoști într-o imagine și ai o întrebare sau o solicitare privind utilizarea ei, trimite-ne evenimentul și fotografia la vaviloga76@gmail.com. Analizăm fiecare solicitare potrivit drepturilor persoanelor vizate și cadrului legal aplicabil.",
            "en": "Photographs show technical setups and events involving Sigma Sound. If you recognise yourself in an image and have a question or request about its use, email the event and photograph details to vaviloga76@gmail.com. We assess each request in light of data subject rights and applicable law."
          }
        ]
      },
      {
        "title": {
          "ro": "Drepturile tale",
          "en": "Your rights"
        },
        "paragraphs": [
          {
            "ro": "În condițiile GDPR, poți cere acces la date, rectificare, ștergere, restricționarea prelucrării sau portabilitate și te poți opune prelucrărilor bazate pe interes legitim. Când o prelucrare se bazează pe consimțământ, acesta poate fi retras fără a afecta legalitatea operațiunilor anterioare. Drepturile se aplică în condițiile și cu excepțiile prevăzute de lege.",
            "en": "Subject to GDPR conditions, you may request access, rectification, erasure, restriction or portability and object to processing based on legitimate interests. Where processing relies on consent, it may be withdrawn without affecting the lawfulness of earlier processing. Rights are subject to legal conditions and exceptions."
          },
          {
            "ro": "Trimite solicitarea la vaviloga76@gmail.com. Termenul obișnuit de răspuns este o lună; o eventuală prelungire este comunicată și justificată conform GDPR. Ai dreptul să depui o plângere la ANSPDCP și să folosești căile judiciare disponibile.",
            "en": "Send your request to vaviloga76@gmail.com. The normal response period is one month; any extension is communicated and justified under the GDPR. You may complain to ANSPDCP and seek available judicial remedies."
          }
        ]
      }
    ]
  },
  {
    "path": "/cookies",
    "title": {
      "ro": "Cookies și stocare",
      "en": "Cookies and storage"
    },
    "description": {
      "ro": "Informații despre cookies, stocarea din browser și renunțarea la Google Analytics în noul site Sigma Sound.",
      "en": "Information about cookies, browser storage and removal of Google Analytics from the new Sigma Sound website."
    },
    "sections": [
      {
        "title": {
          "ro": "Ce folosește noul site",
          "en": "What the new website uses"
        },
        "paragraphs": [
          {
            "ro": "Aplicația nu utilizează cookies de analiză sau publicitate, Google Analytics ori Meta Pixel. Nu folosește localStorage, sessionStorage sau IndexedDB. Limba aleasă este ținută numai în memoria aplicației în timpul navigării.",
            "en": "The application does not use analytics or advertising cookies, Google Analytics or Meta Pixel. It does not use localStorage, sessionStorage or IndexedDB. Your selected language is held only in application memory while browsing."
          },
          {
            "ro": "Browserul poate păstra în cache imagini și fișiere pentru încărcare mai rapidă. Nu folosim acest cache pentru profilare sau publicitate.",
            "en": "Your browser may cache images and files for faster loading. We do not use that cache for profiling or advertising."
          }
        ]
      },
      {
        "title": {
          "ro": "Cookies din versiunea anterioară",
          "en": "Cookies from the previous version"
        },
        "paragraphs": [
          {
            "ro": "Site-ul anterior folosea Google Analytics, cu cookies _ga și _ga_ZMB567ZTWB. Noua aplicație nu încarcă Google Analytics și șterge aceste cookies accesibile pe domeniul sigmasound.ro, dacă ele mai există în browser. Nu este necesară acceptarea cookies publicitare pentru a vedea site-ul.",
            "en": "The previous website used Google Analytics cookies named _ga and _ga_ZMB567ZTWB. The new application does not load Google Analytics and deletes these accessible cookies on sigmasound.ro if they remain in your browser. Accepting advertising cookies is not required to view the website."
          }
        ]
      },
      {
        "title": {
          "ro": "Găzduire și linkuri externe",
          "en": "Hosting and external links"
        },
        "paragraphs": [
          {
            "ro": "Infrastructura Claus Web poate aplica măsuri tehnice de securitate și protecție împotriva traficului abuziv. Aceste funcții sunt distincte de analiza publicitară și depind de serviciul de găzduire.",
            "en": "Claus Web infrastructure may apply technical security and abuse-protection measures. These are separate from advertising analytics and depend on the hosting service."
          },
          {
            "ro": "WhatsApp, Instagram și Facebook sunt accesibile prin linkuri obișnuite. Nu încărcăm widgeturi sociale în pagină. După ce alegi să deschizi o platformă, se aplică politica acelei platforme.",
            "en": "WhatsApp, Instagram and Facebook are available through ordinary links. We do not load social widgets in the page. Once you choose to open a platform, its policy applies."
          }
        ]
      },
      {
        "title": {
          "ro": "Cum gestionezi datele din browser",
          "en": "Managing browser data"
        },
        "paragraphs": [
          {
            "ro": "Poți vedea și șterge cookies și cache-ul pentru sigmasound.ro din setările browserului. Dacă ștergi datele păstrate din versiunea veche, unele resurse vor fi descărcate din nou la următoarea vizită.",
            "en": "You can inspect and delete cookies and cache for sigmasound.ro through your browser settings. If you delete data retained from the old version, some resources will download again on your next visit."
          },
          {
            "ro": "Dacă adăugăm instrumente neesențiale care necesită consimțământ, îți vom cere alegerea înainte de activarea lor și vom oferi posibilitatea de refuz și retragere. Pentru întrebări, ne poți scrie la vaviloga76@gmail.com.",
            "en": "If we add non-essential tools requiring consent, we will ask for your choice before activation and provide refusal and withdrawal options. For questions, email vaviloga76@gmail.com."
          }
        ]
      }
    ]
  },
  {
    "path": "/informatii-legale",
    "title": {
      "ro": "Informații despre site",
      "en": "Website information"
    },
    "description": {
      "ro": "Contact, utilizare și informații despre site-ul de prezentare Sigma Sound.",
      "en": "Contact, use and information about the Sigma Sound presentation website."
    },
    "sections": [
      {
        "title": {
          "ro": "Sigma Sound",
          "en": "Sigma Sound"
        },
        "paragraphs": [
          {
            "ro": "Website: www.sigmasound.ro. Email: vaviloga76@gmail.com. Telefon: 0744 125 740 și 0744 845 891.",
            "en": "Website: www.sigmasound.ro. Email: vaviloga76@gmail.com. Phone: +40 744 125 740 and +40 744 845 891."
          }
        ]
      },
      {
        "title": {
          "ro": "Serviciile prezentate",
          "en": "Services presented"
        },
        "paragraphs": [
          {
            "ro": "Site-ul prezintă servicii de scenă, sonorizare și lumini pentru evenimente, împreună cu imagini din activitatea Sigma Sound. Configurația tehnică, disponibilitatea, prețul și condițiile colaborării se stabilesc prin contact direct.",
            "en": "The website presents stage, sound and lighting services for events, with images from Sigma Sound’s work. The technical setup, availability, price and terms of engagement are agreed through direct contact."
          },
          {
            "ro": "Navigarea pe site nu plasează o comandă și nu încheie automat un contract. Nu există rezervări sau plăți online.",
            "en": "Browsing the website does not place an order or automatically conclude a contract. There are no online bookings or payments."
          }
        ]
      },
      {
        "title": {
          "ro": "Utilizarea conținutului",
          "en": "Use of content"
        },
        "paragraphs": [
          {
            "ro": "Imaginile și textele trebuie utilizate cu respectarea drepturilor titularilor. Pentru folosirea unui material sau pentru o solicitare privind o fotografie, contactează-ne la adresa de email de mai sus.",
            "en": "Images and text must be used in accordance with their holders’ rights. To use material or make a request about a photograph, contact us at the email address above."
          }
        ]
      },
      {
        "title": {
          "ro": "Găzduire și servicii externe",
          "en": "Hosting and external services"
        },
        "paragraphs": [
          {
            "ro": "Site-ul este găzduit la Claus Web. Linkurile către alte platforme deschid servicii independente, cu propriile politici. Informațiile despre datele personale și stocarea în browser sunt disponibile în paginile Confidențialitate și Cookies și stocare.",
            "en": "The website is hosted by Claus Web. Links to other platforms open independent services with their own policies. Information about personal data and browser storage is available on the Privacy and Cookies and storage pages."
          }
        ]
      }
    ]
  }
];
