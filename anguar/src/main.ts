/**
 * [ES] Punto de entrada (bootstrap) de la app Angular.
 *
 * - **bootstrapApplication(...)**: arranca una app Angular "standalone" (sin `AppModule`).
 * - **App**: componente raíz (renderiza `app.html` y contiene el `<router-outlet>`).
 * - **appConfig**: configuración global (providers como el Router).
 *
 * Si vienes de otros frameworks: esto es el equivalente a "main()" + "montar la app".
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Arranca Angular y monta el componente raíz en el selector definido en `index.html` (<aplicacio>).
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
