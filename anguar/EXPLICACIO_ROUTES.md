# 🗺️ Explicación del Sistema de Rutas en Angular

## 🔄 Flujo Completo: De dónde sale `routerLink` y las rutas

```
1. app.routes.ts          → Define las rutas y qué componente mostrar
2. app.config.ts          → Configura el Router con las rutas
3. app.ts                 → Importa RouterLink para usarlo en el HTML
4. app.html              → Usa routerLink="/ruta" para navegar
5. <router-outlet>       → Muestra el componente correspondiente
```

## 📝 Paso a Paso

### 1. **Definición de Rutas: `app.routes.ts`**

```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },           // Ruta: /
  { path: 'aprendre', component: AprendreComponent }, // Ruta: /aprendre
  { path: 'actuar', component: ActuarComponent },    // Ruta: /actuar
  // ...
];
```

**¿Qué hace esto?**
- Crea un "mapa" de rutas
- Dice: "Si la URL es `/aprendre`, muestra `AprendreComponent`"
- Es como un diccionario: `ruta → componente`

### 2. **Configuración del Router: `app.config.ts`**

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // ← Aquí se registran las rutas
    // ...
  ]
};
```

**¿Qué hace esto?**
- Le dice a Angular: "Usa estas rutas"
- Habilita el sistema de routing en toda la app

### 3. **Importar RouterLink: `app.ts`**

```typescript
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],  // ← Permite usar routerLink en el HTML
  // ...
})
```

**¿Qué hace esto?**
- Importa las directivas necesarias
- `RouterLink` → Para hacer enlaces que navegan sin recargar
- `RouterLinkActive` → Para destacar el enlace activo

### 4. **Usar routerLink en el HTML: `app.html`**

```html
<a routerLink="/aprendre">Aprèn</a>
```

**¿Qué hace esto?**
- `routerLink` → Es una directiva de Angular (viene de `@angular/router`)
- `"/aprendre"` → Es la ruta definida en `app.routes.ts`
- Cuando haces clic, Angular busca en las rutas y muestra el componente correspondiente

### 5. **Mostrar el Componente: `<router-outlet>`**

```html
<router-outlet></router-outlet>
```

**¿Qué hace esto?**
- Es donde Angular "inyecta" el componente de la ruta actual
- Si estás en `/aprendre`, aquí aparece `AprendreComponent`
- Si estás en `/actuar`, aquí aparece `ActuarComponent`

## 🎯 Ejemplo Completo

### Cuando haces clic en "Aprèn":

1. **Usuario hace clic:**
   ```html
   <a routerLink="/aprendre">Aprèn</a>
   ```

2. **Angular busca la ruta:**
   ```typescript
   // app.routes.ts
   { path: 'aprendre', component: AprendreComponent }
   ```

3. **Angular carga el componente:**
   ```typescript
   // AprendreComponent se renderiza
   ```

4. **Angular lo muestra en:**
   ```html
   <router-outlet></router-outlet>
   <!-- Aquí aparece el contenido de AprendreComponent -->
   ```

## 🔍 Analogía Simple

Imagina que tienes una casa con varias habitaciones:

```
app.routes.ts = Plano de la casa
  - "/" = Sala (HomeComponent)
  - "/aprendre" = Cocina (AprendreComponent)
  - "/actuar" = Dormitorio (ActuarComponent)

routerLink = Puertas
  - routerLink="/aprendre" = Puerta que lleva a la cocina

router-outlet = Espacio donde se muestra la habitación actual
  - Si estás en "/aprendre", aquí ves la cocina
```

## ✅ Resumen Visual

```
┌─────────────────────────────────────────┐
│ app.routes.ts                          │
│ { path: 'aprendre',                    │
│   component: AprendreComponent }       │
└──────────────┬──────────────────────────┘
               │
               │ Se registra en
               ↓
┌─────────────────────────────────────────┐
│ app.config.ts                           │
│ provideRouter(routes)                   │
└──────────────┬──────────────────────────┘
               │
               │ Habilita
               ↓
┌─────────────────────────────────────────┐
│ app.ts                                   │
│ imports: [RouterLink]                   │
└──────────────┬──────────────────────────┘
               │
               │ Permite usar
               ↓
┌─────────────────────────────────────────┐
│ app.html                                 │
│ <a routerLink="/aprendre">              │
│   ← Hace clic aquí                      │
└──────────────┬──────────────────────────┘
               │
               │ Navega a
               ↓
┌─────────────────────────────────────────┐
│ <router-outlet>                         │
│   ← Aquí aparece AprendreComponent     │
└─────────────────────────────────────────┘
```

## 🎓 Conceptos Clave

1. **`routerLink`** → Directiva de Angular para navegar (viene de `@angular/router`)
2. **`/aprendre`** → Ruta definida en `app.routes.ts`
3. **`AprendreComponent`** → Componente que se muestra cuando estás en `/aprendre`
4. **`<router-outlet>`** → Lugar donde Angular muestra el componente actual
5. **No recarga la página** → Es una SPA (Single Page Application)

## 🔗 Diferencia con enlaces normales

```html
<!-- Enlace normal (recarga la página) -->
<a href="/aprendre">Aprèn</a>

<!-- RouterLink (NO recarga, solo cambia el componente) -->
<a routerLink="/aprendre">Aprèn</a>
```

**Ventaja de `routerLink`:**
- Más rápido (no recarga toda la página)
- Mejor experiencia de usuario
- Mantiene el estado de la aplicación

