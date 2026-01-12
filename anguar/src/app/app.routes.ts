/**
 * [ES] Definición de rutas de la app.
 *
 * - `Routes` es la tabla de enrutado: cada entrada mapea `path` -> `component`.
 * - Las dos últimas rutas son típicas:
 *   - `''` redirige al inicio.
 *   - `'**'` captura cualquier ruta desconocida (404) y redirige.
 */
import { Routes } from '@angular/router';
import { IniciComponent } from './inici.component';
import { AprenComponent } from './apren.component';
import { ActuaComponent } from './actua.component';


export const routes: Routes = [
  // Páginas principales (proyecto nuevo)
  { path: 'inici', component: IniciComponent },
  { path: 'apren', component: AprenComponent },
  { path: 'actua', component: ActuaComponent },

  // Ruta por defecto: cuando no hay path, redirige.
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  // Comodín: si la URL no coincide con ninguna ruta, redirige.
  { path: '**', redirectTo: '/inici' }
];