import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Component: Recursos
 * 
 * Objectiu: Enllaços curats i descarregables
 * 
 * Contingut:
 * - Targetes per tipus: guies, datasets, projectes locals, normativa
 * - Sempre: font + data + breu resum
 */
@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursos.html',
  styleUrls: ['./recursos.css']
})
export class RecursosComponent {
  recursos = [
    {
      categoria: 'Guies',
      icon: '📚',
      items: [
        {
          titol: 'Guia d\'estalvi energètic domèstic',
          descripcio: 'Guia completa amb consells pràctics per reduir el consum energètic a casa.',
          font: 'Ajuntament de Barcelona',
          data: '2024',
          enllac: '#',
          tipus: 'PDF'
        },
        {
          titol: 'Manual de reciclatge a Barcelona',
          descripcio: 'Explicació detallada de com separar correctament els residus segons la normativa local.',
          font: 'AMB (Àrea Metropolitana de Barcelona)',
          data: '2024',
          enllac: '#',
          tipus: 'PDF'
        }
      ]
    },
    {
      categoria: 'Datasets',
      icon: '📊',
      items: [
        {
          titol: 'Dades de qualitat de l\'aire (Open Data BCN)',
          descripcio: 'Dataset obert amb dades històriques de qualitat de l\'aire a Barcelona.',
          font: 'Open Data BCN',
          data: '2024',
          enllac: '#',
          tipus: 'CSV'
        },
        {
          titol: 'Consum d\'aigua per barris',
          descripcio: 'Estadístiques de consum d\'aigua desglossades per barris de Barcelona.',
          font: 'Aigües de Barcelona',
          data: '2023',
          enllac: '#',
          tipus: 'JSON'
        }
      ]
    },
    {
      categoria: 'Projectes locals',
      icon: '🌱',
      items: [
        {
          titol: 'Barcelona + Sostenible',
          descripcio: 'Programa municipal per promoure la sostenibilitat i l\'acció climàtica ciutadana.',
          font: 'Ajuntament de Barcelona',
          data: '2024',
          enllac: '#',
          tipus: 'Web'
        },
        {
          titol: 'Refugis climàtics',
          descripcio: 'Xarxa d\'espais públics adaptats per fer front a les ones de calor.',
          font: 'Ajuntament de Barcelona',
          data: '2024',
          enllac: '#',
          tipus: 'Web'
        }
      ]
    },
    {
      categoria: 'Normativa',
      icon: '⚖️',
      items: [
        {
          titol: 'Zona de Baixes Emissions (ZBE)',
          descripcio: 'Normativa sobre restriccions de circulació de vehicles a Barcelona.',
          font: 'AMB',
          data: '2024',
          enllac: '#',
          tipus: 'Web'
        },
        {
          titol: 'Ordenança de gestió de residus',
          descripcio: 'Normativa municipal sobre separació i gestió de residus domèstics.',
          font: 'Ajuntament de Barcelona',
          data: '2023',
          enllac: '#',
          tipus: 'PDF'
        }
      ]
    }
  ];
}

