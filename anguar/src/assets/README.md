# 📁 src/assets/

Directori per a recursos estàtics que es copien tal qual al build de l'aplicació.

## Contingut

Aquest directori pot contenir:

### Imatges
- Logos (p. ex. `logo_clot.png`)
- Il·lustracions
- Icones personalitzades
- Imatges de fons

### Dades JSON
- Contingut estàtic (p. ex. `dades.json`)
- Dades mock per a desenvolupament
- Configuracions

### Altres recursos
- Fonts personalitzades
- Fitxers de dades (CSV, etc.)
- Documents PDF (si cal)

## Ús

Per accedir als recursos des dels components:

```typescript
// En un component
imagePath = 'assets/logo_clot.png';

// En una plantilla HTML
<img src="assets/logo_clot.png" alt="Logo">
```

## Notes

- Els fitxers d'aquest directori es copien directament al build
- Utilitza rutes relatives des de `assets/` (no cal el prefix `/assets/` en alguns casos)
- Per a imatges grans, considera optimitzar-les abans d'afegir-les

