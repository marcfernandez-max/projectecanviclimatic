import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
/*
  * Component principal de l'aplicació
*/

/**
 * [ES] Componente raíz de la app.
 *
 * Conceptos Angular clave:
 * - `@Component(...)`: decorador que convierte la clase en componente (metadatos).
 * - `standalone` implícito: en Angular moderno puedes declarar `imports` aquí (sin módulos).
 * - `RouterOutlet`: placeholder donde el Router renderiza el componente de la ruta activa.
 * - `RouterLink`: directiva para navegación declarativa en plantillas.
 * - `signal(...)`: estado reactivo (Angular Signals) para valores que cambian.
 */
@Component({
  selector: 'aplicacio',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Signal: similar a un "state" reactivo. Se lee con `this.title()` en TS o `title()` en plantilla.
  protected readonly title = signal('pj9');
}
