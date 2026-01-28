/**
 * ============================================
 * COMPONENT TYPESCRIPT - La lògica de la pàgina
 * ============================================
 * 
 * Aquest fitxer conté la CLASSE del component, que és on es defineix:
 * 1. Les dades (variables/propietats) que la pàgina utilitza
 * 2. Les funcions/mètodes que reaccionen a les accions de l'usuari
 * 3. La configuració del component (selector, imports, etc.)
 */

// Importem les classes i mòduls necessaris d'Angular
import { Component } from '@angular/core';        // Decorador @Component per definir un component
import { CommonModule } from '@angular/common';   // Mòdul amb directives com *ngFor, *ngIf
import { RouterLink } from '@angular/router';     // Directiva per fer navegació entre pàgines

/**
 * Decorador @Component: Defineix que aquesta classe ÉS un component Angular
 * 
 * selector: 'app-aprendre'
 *   - És el nom de l'etiqueta HTML que utilitzarem per mostrar aquest component
 *   - Exemple: <app-aprendre></app-aprendre>
 * 
 * standalone: true
 *   - Indica que aquest component NO necessita un NgModule
 *   - És una característica moderna d'Angular (versió 14+)
 * 
 * imports: [CommonModule, RouterLink]
 *   - CommonModule: Necessari per utilitzar *ngFor, *ngIf, etc.
 *   - RouterLink: Necessari per utilitzar routerLink al HTML
 * 
 * templateUrl: './aprendre.html'
 *   - Ruta al fitxer HTML que conté la plantilla (la vista)
 *   - Angular carregarà aquest HTML i l'omplirà amb les dades del component
 * 
 * styleUrls: ['./aprendre.css']
 *   - Ruta al fitxer CSS amb els estils específics d'aquest component
 *   - Aquests estils només s'apliquen a aquest component (scoped)
 */
@Component({
  selector: 'app-aprendre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aprendre.html',
  styleUrls: ['./aprendre.css']
})
export class AprendreComponent {
  /**
   * ============================================
   * DADES DEL COMPONENT (Propietats/Variables)
   * ============================================
   * 
   * Aquestes són les dades que el component utilitza i que es poden mostrar al HTML.
   * Quan canvies aquestes dades, Angular actualitza automàticament la vista.
   */

  /**
   * Array amb tots els temes disponibles
   * 
   * Cada tema és un objecte amb:
   * - id: identificador únic (string)
   * - titol: nom del tema (string)
   * - icon: emoji o icona (string)
   * - apren: text explicatiu "Aprèn" (string)
   * - perQueImporta: text "Per què importa" (string)
   * - senyals: text "Senyals a la teva ciutat" (string)
   * 
   * Aquest array es recorre al HTML amb *ngFor per mostrar tots els temes al sidebar.
   */
  temas = [
    {
      id: 'aigua',
      titol: 'Aigua',
      icon: '🌊',
      apren: 'Barcelona enfronta una pressió creixent sobre les seves reserves d\'aigua a causa de les sequeres més freqüents i l\'augment de consum. Gran part de l\'aigua potable es perd en infraestructures antigues i l\'ús excessiu a la llar o el reg de jardins agreuja el problema.',
      perQueImporta: 'L\'aigua és un recurs finit. La gestió sostenible és clau per garantir l\'accés futur i reduir l\'impacte ambiental del cicle de l\'aigua.',
      senyals: 'Sequeres més llargues, restriccions d\'aigua, pèrdues en la xarxa de distribució i consum domèstic en augment.'
    },
    {
      id: 'residus',
      titol: 'Residus',
      icon: '♻️',
      apren: 'L\'acumulació de residus al sòl i els errors en la separació afecten al reciclatge i contaminen l\'entorn. Molts residus acaben en abocadors o al mar Mediterrani, afectant la biodiversitat local.',
      perQueImporta: 'El reciclatge correcte redueix la contaminació, estalvia recursos naturals i disminueix les emissions de CO₂ associades a la producció de nous materials.',
      senyals: 'Contenidors plens, residus al carrer, errors de separació i impacte en la fauna marina.'
    },
    {
      id: 'energia',
      titol: 'Energia',
      icon: '⚡',
      apren: 'El consum energètic de les llars i comerços augmenta als mesos càlids, especialment per l\'ús d\'aire condicionat. Això incrementa les emissions de CO₂ i la demanda elèctrica en hores punta.',
      perQueImporta: 'L\'estalvi energètic redueix les emissions, disminueix la dependència de fonts no renovables i ajuda a estabilitzar la xarxa elèctrica.',
      senyals: 'Pics de consum a l\'estiu, factures elevades, dependència de combustibles fòssils i escalfament urbà.'
    },
    {
      id: 'verd',
      titol: 'Espais verds i biodiversitat',
      icon: '🌳',
      apren: 'Les zones verdes urbanes redueixen la calor, filtren l\'aire i milloren la salut mental, però estan sota pressió per la urbanització i la falta de manteniment. Cada arbre compta com a refugi climàtic.',
      perQueImporta: 'Els espais verds són essencials per a la qualitat de l\'aire, la reducció de l\'efecte illa de calor i el benestar ciutadà.',
      senyals: 'Reducció d\'espais verds, arbres malalts, pèrdua de biodiversitat i augment de temperatures urbanes.'
    },
    {
      id: 'mobilitat',
      titol: 'Mobilitat',
      icon: '🚶',
      apren: 'El trànsit és una de les principals fonts de contaminació a Barcelona. Els vehicles privats emeten gasos que agreugen l\'efecte hivernacle i la mala qualitat de l\'aire afecta la salut pública.',
      perQueImporta: 'La mobilitat sostenible redueix les emissions, millora la qualitat de l\'aire i promou estils de vida més saludables.',
      senyals: 'Alts nivells de NO₂, congestió de trànsit, soroll ambiental i impacte en la salut respiratòria.'
    }
  ];

  /**
   * Variable que guarda el tema actualment seleccionat
   * 
   * Inicialment, es posa al primer tema de l'array (this.temas[0])
   * Quan l'usuari fa clic en un tema del sidebar, aquesta variable canvia
   * i Angular actualitza automàticament el contingut mostrat.
   */
  temaSeleccionat = this.temas[0]; // Per defecte, primer tema

  /**
   * ============================================
   * MÈTODES/FUNCIONS DEL COMPONENT
   * ============================================
   * 
   * Aquestes funcions es criden des del HTML quan l'usuari fa alguna acció
   * (com fer clic, escriure, etc.)
   */

  /**
   * Funció que canvia el tema seleccionat
   * 
   * @param tema - L'objecte tema que s'ha seleccionat (el que l'usuari ha clicat)
   * 
   * Aquesta funció es crida des del HTML quan l'usuari fa clic en un tema del sidebar:
   * (click)="seleccionarTema(tema)"
   * 
   * Quan canvia temaSeleccionat, Angular detecta el canvi i actualitza automàticament
   * totes les parts del HTML que utilitzen temaSeleccionat (com {{ temaSeleccionat.titol }})
   */
  seleccionarTema(tema: any): void {
    this.temaSeleccionat = tema; // Assignem el nou tema seleccionat
  }
}
