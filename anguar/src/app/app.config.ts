/**
 * [ES] Configuración global de la aplicación (standalone).
 *
 * Aquí se registran **providers** (inyección de dependencias / DI) a nivel de app.
 * En Angular moderno, esto sustituye parte del rol que antes tenía `AppModule`.
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Registra listeners globales de errores en el navegador.
    provideBrowserGlobalErrorListeners(),
    // Activa el Router y le pasa la tabla de rutas (`Routes`).
    provideRouter(routes)
  ]
};
