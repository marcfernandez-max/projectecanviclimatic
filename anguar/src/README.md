# 📁 src/

Aquest directori conté el codi font de l'aplicació Angular ClimaBCN.

## Estructura

```
src/
├── app/              # Components, serveis, pipes, directives i configuració de l'app
├── assets/           # Recursos estàtics (imatges, dades JSON, etc.)
├── index.html        # HTML principal on es munta l'aplicació
├── main.ts           # Punt d'entrada (bootstrap) de l'aplicació
└── styles.css        # Estils globals i variables CSS
```

## Descripció de carpetes

### `app/`
Conté tots els components, serveis, pipes, directives i la configuració de l'aplicació Angular.

**Components principals:**
- `home.component.*` - Pàgina d'inici (portada)
- `aprendre.component.*` - Pàgina d'aprenentatge per temes
- `actuar.component.*` - Pàgina de reptes interactius
- `dades.component.*` - Pàgina de dades i indicadors
- `recursos.component.*` - Pàgina de recursos i enllaços
- `sobre.component.*` - Pàgina sobre el projecte

**Arxius de configuració:**
- `app.ts` - Component arrel
- `app.routes.ts` - Configuració de rutes
- `app.config.ts` - Configuració global (providers, etc.)

### `assets/`
Recursos estàtics que es copien tal qual al build:
- Imatges (logos, il·lustracions)
- Dades JSON (contingut estàtic, dades mock)
- Altres fitxers estàtics

### `index.html`
HTML principal on Angular es munta. Conté:
- Meta tags
- Títol de la pàgina
- Enllaços a CSS externs (Bootstrap, etc.)
- Selector del component arrel (`<aplicacio></aplicacio>`)

### `main.ts`
Punt d'entrada de l'aplicació. Fa el bootstrap d'Angular i munta el component arrel.

### `styles.css`
Estils globals aplicats a tota l'aplicació:
- Variables CSS (paleta de colors segons el RD)
- Resets bàsics
- Estils compartits

## Notes

- Tots els components són **standalone** (no utilitzen NgModules)
- Les rutes estan definides a `app.routes.ts`
- Els estils segueixen la paleta definida al RD (verds, crema, etc.)

