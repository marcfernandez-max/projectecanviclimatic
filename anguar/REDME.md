## 📘 RD (Document de Definició de Projecte)

## **ClimaBCN — Aprèn i Actua (SPA en Angular)**

**ClimaBCN** és una aplicació web educativa (SPA/PWA) centrada en Barcelona que combina **aprenentatge**, **dades amb context** i **reptes pràctics** per convertir la consciència climàtica en accions mesurables.  
El producte s’inspira en un estil “eco-digital” (gradients verds, fons crema, seccions tipus landing, targetes amb microinteraccions), però amb continguts, estructura i marca pròpies.

---

## 1) Visió general

- **Problema**: la informació climàtica sovint és abstracta; costa connectar “dada” amb “acció” quotidiana.
- **Solució**: una plataforma que expliqui “què està passant”, mostri “el repte en xifres” i proposi “què puc fer avui” amb reptes curts i interactius.
- **Abast**: Barcelona ciutat + àrea metropolitana (contingut localitzable per barri/tema en fases futures).
- **Tipus d’app**: SPA en Angular (idealment PWA) amb navegació per seccions.

---

## 2) Proposta de valor (en una frase)

**Aprèn l’essencial del clima a Barcelona, entén l’impacte amb xifres clares i actua amb reptes simples que pots completar en minuts.**

---

## 3) Públic objectiu

- **Estudiants (ESO/Batx/Uni)**: recursos per temes + activitats guiades.
- **Professorat**: materials i propostes d’avaluació (fase 2).
- **Ciutadania**: hàbits, reptes i recursos locals.

---

## 4) Principis UX/UI (estil i comportament)

- **Impacte immediat**: hero amb missatge clar i 2 CTA (“Explorar recursos”, “Fer un repte”).
- **Seccions narratives**: blocs alternant text + cards (com una landing).
- **Targetes “El repte en xifres”**: cards que mostren una dada gran i, en interactuar, revelen context (hover a desktop, clic a mòbil).
- **Layout interior amb sidebar**: a “Aprendre/Actuar” es prioritza la navegació per temes/reptes (sidebar o pestanyes).
- **Accessibilitat**: contrast AA, focus visible, suport de teclat a cards/drag&drop amb alternativa (mode “selecció”).

---

## 5) Identitat visual (paleta + tipografia)

**Paleta base (CSS Variables)** (inspiració eco, però personalitzable):

- **Primary Green** `#2D5016` (capçaleres, botons primaris)
- **Secondary Green** `#4A7C2C` (accents, vores)
- **Light Green** `#6B9B47` (gradients suaus)
- **Accent Earth** `#5D4037` (secció “xifres”/contrast càlid)
- **Cream** `#F5F1E8` (fons principal)
- **White** `#FFFFFF` (cards)
- **Text** `#1A1A1A`

**Tipografia**:
- Principal: **Inter** o **Montserrat** (Google Fonts).

**Iconografia**:
- Bootstrap Icons o similar (línia simple, consistent).

---

## 6) Arquitectura de la informació (rutes)

Rutes Angular (Router):

- **`/`**: Portada (Home/Landing)
- **`/aprendre`**: Continguts per tema (Aigua, Residus, Energia, Verd urbà, Mobilitat)
- **`/actuar`**: Reptes interactius (mini-jocs i checklists)
- **`/dades`**: Panell d’indicadors (gràfiques + explicacions)
- **`/recursos`**: Recursos i enllaços verificats (descàrregues, guies, fonts)
- **`/sobre`**: Qui som + metodologia + crèdits

Opcional (fase 2):
- **`/tema/:slug`**: detall de tema (contingut modular)
- **`/repte/:id`**: detall de repte amb progrés

---

## 7) Pantalles (desglossament)

### A) Home (`/`)
Objectiu: “Ho entenc i començo ja”.

- **Header**: marca + navegació + botó CTA “Comença un repte”.
- **Hero**:
  - claim + text breu (2–3 frases)
  - 2 CTAs: “Explorar recursos” i “Fer una activitat”
  - bloc visual (il·lustració/icona)
- **Secció: El repte en xifres**
  - 4 targetes (dada gran + revers amb explicació)
- **Secció: Per a qui és**
  - 3 cards (Estudiants, Professorat, Ciutadania)
- **Footer**
  - crèdits, fonts, contacte

### B) Aprendre (`/aprendre`)
Objectiu: aprenentatge per temes, ràpid i accionable.

- **Sidebar/Pestanyes**: Temes (Aigua, Residus, Energia, Verd, Mobilitat)
- **Contingut**: cards amb “Aprèn” + “Per què importa” + “Senyals a la teva ciutat”
- **Mòdul visual (opcional)**: “Any → intensitat” (slider o input) per mostrar una capa de calor/explicació (mode educatiu).

### C) Actuar (`/actuar`)
Objectiu: passar a l’acció amb interacció i reforç.

Reptes (fase 1):
- **Separació de residus**: drag & drop (amb alternativa accessible).
- **Checklist d’estalvi energètic**: marcar hàbits i veure impacte estimat.
- **Quiz curt**: 5 preguntes, feedback immediat.

Progrés:
- punts/insígnies simples (localStorage a fase 1).

### D) Dades (`/dades`)
Objectiu: transparència + context (sense aclaparar).

- Selector de període: [Avui] [7 dies] [30 dies] (si hi ha dades)
- Gràfiques:
  - línia (tendència)
  - barres (comparativa per tema/indicador)
- Blocs “Què significa” i “Què puc fer”

### E) Recursos (`/recursos`)
Objectiu: enllaços curats i descarregables.

- targetes per tipus: guies, datasets, projectes locals, normativa.
- sempre: font + data + breu resum.

---

## 8) Funcionalitats clau (MVP)

- **Landing completa** amb seccions reutilitzables (Hero, Xifres, Audiència).
- **Aprendre** amb 5 temes (contingut inicial en JSON local).
- **Actuar** amb com a mínim 1 repte interactiu (residus) + 1 checklist.
- **Dades** amb gràfiques demo (mock) i arquitectura preparada per a API.
- **Persistència local**: progrés de reptes i preferències d’UI.

---

## 9) Stack tècnic (Angular)

- **Framework**: Angular 17+ (preferible amb **Standalone Components**)
- **Llenguatge**: TypeScript
- **UI**: Bootstrap 5 + CSS custom amb variables (o Tailwind si es decideix)
- **Icones**: Bootstrap Icons / FontAwesome
- **Gràfiques**: `chart.js` + `ng2-charts`
- **Interacció**: `@angular/cdk/drag-drop` (reptes)
- **PWA** (opcional): `@angular/pwa`

---

## 10) Dades i fonts (fases)

Fase 1 (sense backend):
- Contingut a `assets/data/*.json`
- Mètriques demo per a gràfiques (mock)

Fase 2 (amb APIs públiques, si aplica):
- Open Data BCN (datasets municipals)
- Fonts científiques agregades (p. ex., indicadors globals) amb caché

Regla: **cada xifra ha de tenir font + data + explicació** a la UI.

---

## 11) Arquitectura de carpetes proposada (Angular)

```
src/
  app/
    core/
      services/
        climate-data.service.ts
        content.service.ts
        progress.service.ts
      models/
      layout/
        app-shell/
        header/
        footer/
    shared/
      components/
        hero-section/
        stat-flip-card/
        audience-card/
        topic-card/
        button/
      pipes/
      directives/
    features/
      home/
      learn/
      act/
      data/
      resources/
      about/
    app.routes.ts
    app.component.ts
  assets/
    images/
    data/
```

---

## 12) Components (mapa ràpid)

- **Layout**
  - `AppShellComponent`: estructura general (header + router-outlet + footer)
  - `HeaderComponent`: navegació i CTA
  - `FooterComponent`: crèdits i fonts

- **Shared**
  - `HeroSectionComponent`
  - `StatFlipCardComponent` (interacció hover/clic)
  - `AudienceCardComponent`
  - `TopicCardComponent`

- **Features**
  - `HomePageComponent`
  - `LearnPageComponent`
  - `ActPageComponent`
  - `DataPageComponent`
  - `ResourcesPageComponent`

---

## 13) Roadmap (pla d’acció)

### Fase 1 — Base (MVP)
- Setup Angular + Router + estils (variables + layout)
- Home completa (hero, xifres, audiència)
- Aprendre amb contingut estàtic (JSON)
- Actuar amb 1 repte (residus) + 1 checklist
- Dades amb mocks + 1 gràfica

### Fase 2 — Profunditat
- Més reptes (quiz, petjada bàsica)
- Recursos amb curació + etiquetatge
- Millores d’accessibilitat (mode alternatiu sense drag&drop)

### Fase 3 — Dades reals
- Integració d’APIs/datasets
- Caché i control d’errors
- Panell “fonts i metodologia”

### Fase 4 — PWA + Polit
- Offline parcial (contingut i progrés)
- Rendiment (lazy loading, imatges, audit)
- Responsive fi + tests E2E

---

## 14) Criteris de “Definition of Done” (DoD)

- UI responsive (mòbil/desktop) i consistent (variables, espaiat, tipografia).
- Navegació clara (rutes i estats actius).
- Interaccions accessibles (teclat + alternativa a drag&drop).
- Contingut i xifres amb font/data quan apliqui.
- Lint/format sense errors i sense warnings crítics.


