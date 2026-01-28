# 📁 src/app/

Directori principal que conté tots els components, serveis i configuració de l'aplicació ClimaBCN.

## Components principals

### Pàgines (Features)

- **`home.component.*`** - Pàgina d'inici
  - Hero section amb missatge i CTAs
  - Secció "El repte en xifres" (4 targetes flip)
  - Secció "Per a qui és" (3 cards d'audiència)

- **`aprendre.component.*`** - Pàgina d'aprenentatge
  - Sidebar amb temes (Aigua, Residus, Energia, Verd, Mobilitat)
  - Cards amb "Aprèn", "Per què importa" i "Senyals a la teva ciutat"

- **`actuar.component.*`** - Pàgina de reptes interactius
  - Repte 1: Separació de residus (drag & drop alternatiu)
  - Repte 2: Checklist d'estalvi energètic
  - Repte 3: Quiz sobre canvi climàtic

- **`dades.component.*`** - Pàgina de dades i indicadors
  - Selector de període (Avui, 7 dies, 30 dies)
  - Gràfiques de tendència i comparativa
  - Blocs explicatius "Què significa" i "Què puc fer"

- **`recursos.component.*`** - Pàgina de recursos
  - Recursos organitzats per categories (Guies, Datasets, Projectes locals, Normativa)
  - Cada recurs mostra: títol, descripció, font, data i enllaç

- **`sobre.component.*`** - Pàgina sobre el projecte
  - Informació del projecte
  - Metodologia
  - Crèdits i fonts

### Configuració

- **`app.ts`** - Component arrel de l'aplicació
  - Conté el header amb navegació
  - Conté el footer
  - Conté el `<router-outlet>` per mostrar les pàgines

- **`app.routes.ts`** - Configuració de rutes
  - Defineix totes les rutes de l'aplicació
  - Ruta per defecte: `/` → HomeComponent

- **`app.config.ts`** - Configuració global
  - Providers (Router, HttpClient, Animations, etc.)

## Estructura de fitxers

Cada component té la seva pròpia carpeta o fitxers amb el patró:
- `[nom].component.ts` - Lògica del component
- `[nom].html` - Plantilla HTML
- `[nom].css` - Estils del component

## Notes

- Tots els components són **standalone** (no utilitzen NgModules)
- Utilitzen `CommonModule` per directives com `*ngFor`, `*ngIf`
- Utilitzen `RouterLink` i `RouterLinkActive` per navegació
- Els estils segueixen la paleta definida al RD

