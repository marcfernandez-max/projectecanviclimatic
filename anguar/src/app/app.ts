import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Component arrel de l'aplicació ClimaBCN
 * 
 * Aquest component conté:
 * - Header amb navegació principal
 * - Router outlet per mostrar les pàgines
 * - Footer amb enllaços i informació
 */
@Component({
  selector: 'aplicacio',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Component arrel - no necessita lògica addicional
}
