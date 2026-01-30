import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * Component: Home (Portada)
 * 
 * Objectiu: "Ho entenc i començo ja"
 * 
 * Contingut:
 * - Hero section amb missatge i CTAs
 * - Secció "El repte en xifres" (4 targetes flip)
 * - Secció "Per a qui és" (3 cards: Estudiants, Professorat, Ciutadania)
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,   MatGridListModule ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Dades per a les targetes "El repte en xifres"
  stats = [
    {
      number: '+1,1 °C',
      label: 'Augment de temperatura global',
      icon: '🌡️',
      title: 'Temperatura Global',
      description: 'L\'augment de 1,1°C respecte a nivells preindustrials ja està causant efectes devastadors: ones de calor extremes, sequeres prolongades i alteració dels ecosistemes.'
    },
    {
      number: '419 ppm',
      label: 'CO₂ a l\'atmosfera (màxim històric)',
      icon: '☁️',
      title: 'CO₂ Atmosfèric',
      description: 'El nivell de CO₂ ha superat els 419 ppm, el més alt en 3 milions d\'anys. Aquest gas d\'efecte hivernacle és el principal causant del canvi climàtic actual.'
    },
    {
      number: '258M',
      label: 'Persones afectades anualment',
      icon: '👥',
      title: 'Impacte Humà',
      description: 'Cada any, 258 milions de persones pateixen les conseqüències directes del canvi climàtic: inundacions, sequeres, pèrdua de collites i desplaçament forçat.'
    },
    {
      number: '67%',
      label: 'Reducció d\'emissions necessària per 2030',
      icon: '📉',
      title: 'Objectiu 2030',
      description: 'Per limitar l\'escalfament a 1,5°C, necessitem reduir les emissions globals un 67% abans del 2030. És un repte ambiciós però assolible amb voluntat política.'
    }
  ];

  // Dades per a "Per a qui és"
  titolCards = [
    {
      icon: '👨‍🎓',
      title: 'Estudiants',
      description: 'Recursos curriculars adaptats per a secundària i universitat, activitats interactives i espai per presentar projectes innovadors amb feedback directe.'
    },
    {
      icon: '👩‍🏫',
      title: 'Professorat',
      description: 'Materials didàctics descarregables, propostes d\'activitats avaluables amb rúbriques i eines per gestionar entregues i qualificacions des d\'un panell d\'administració.'
    },
    {
      icon: '🌍',
      title: 'Ciutadania',
      description: 'Hàbits, reptes i recursos locals per transformar la consciència climàtica en accions quotidianes mesurables i impactants.'
    }
  ];

  // Control de flip de targetes
  flippedCards: Set<number> = new Set();

  toggleFlip(index: number): void {
    if (this.flippedCards.has(index)) {
      this.flippedCards.delete(index);
    } else {
      this.flippedCards.add(index);
    }
  }

  isFlipped(index: number): boolean {
    return this.flippedCards.has(index);
  }
}

