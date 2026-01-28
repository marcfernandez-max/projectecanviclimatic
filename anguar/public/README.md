# 📁 public/

Directori per a fitxers estàtics que es copien directament a l'arrel del build.

## Contingut

Aquest directori conté fitxers que es serveixen directament sense processar:

### `favicon.ico`
Icona que apareix a la pestanya del navegador.

## Diferència amb `src/assets/`

- **`public/`**: Fitxers que es copien a l'arrel del build (p. ex. `/favicon.ico`)
- **`src/assets/`**: Fitxers que es copien a `/assets/` al build (p. ex. `/assets/logo.png`)

## Ús

Els fitxers de `public/` es referencien des de l'arrel:

```html
<!-- A index.html -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## Notes

- Utilitza `public/` per a fitxers que han d'estar a l'arrel del build
- Utilitza `src/assets/` per a la majoria de recursos (imatges, dades, etc.)

