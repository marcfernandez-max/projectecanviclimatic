import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Component: Dades
 * 
 * Objectiu: Transparència + context (sense aclaparar)
 * 
 * Contingut:
 * - Selector de període: [Avui] [7 dies] [30 dies]
 * - Gràfiques: línia (tendència) i barres (comparativa)
 * - Blocs "Què significa" i "Què puc fer"
 */
@Component({
  selector: 'app-dades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dades.html',
  styleUrls: ['./dades.css']
})
export class DadesComponent {
  periodSelected = 'avui'; // 'avui' | '7dies' | '30dies'

  // Dades mock per a les gràfiques
  tendenciaData = {
    labels: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
    values: [45, 52, 48, 55, 60, 58]
  };

  comparativaData = {
    labels: ['Aigua', 'Residus', 'Energia', 'Verd', 'Mobilitat'],
    values: [65, 72, 58, 80, 55]
  };

  // Explicacions
  explicacions = [
    {
      tema: 'Aigua',
      significa: 'El consum d\'aigua a Barcelona ha augmentat un 15% respecte a l\'any passat. Això reflecteix la pressió sobre els recursos hídrics i la necessitat d\'estalviar.',
      pucFer: 'Redueix el temps de dutxa, reutilitza l\'aigua de la cuina per regar plantes i repara les fuites immediatament.'
    },
    {
      tema: 'Residus',
      significa: 'El 72% dels residus es reciclen correctament, però encara hi ha marge de millora. Els errors de separació dificulten el procés de reciclatge.',
      pucFer: 'Separa correctament els residus, composta els residus orgànics i redueix l\'ús de plàstics d\'un sol ús.'
    },
    {
      tema: 'Energia',
      significa: 'El consum energètic ha baixat un 8% gràcies a les mesures d\'estalvi, però encara depenem majoritàriament de fonts no renovables.',
      pucFer: 'Utilitza llums LED, desconnecta aparells en standby i ajusta el termòstat per estalviar energia.'
    }
  ];

  selectPeriod(period: string): void {
    this.periodSelected = period;
    // Aquí es podria fer una crida a l'API per obtenir dades del període seleccionat
  }

  // Funció per generar colors de les barres
  getBarColor(value: number): string {
    if (value >= 70) return '#4a7c2c'; // Verd (bo)
    if (value >= 50) return '#feb019'; // Groc (moderat)
    return '#ff4560'; // Vermell (dolent)
  }
}

