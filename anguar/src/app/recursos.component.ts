import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recursos.html',
  styleUrls: ['./recursos.css']
})
export class RecursosComponent {
  noticies = [
    { id: '1', titol: 'Barcelona amplia la xarxa de refugis climàtics', pais: 'Espanya' },
    { id: '2', titol: 'Nou pla de mobilitat sostenible a la ciutat', pais: 'Espanya' },
    { id: '3', titol: 'Iniciatives europees de neutralitat climàtica 2030', pais: 'Unió Europea' },
    { id: '4', titol: 'París reforça les zones de baixes emissions al centre', pais: 'França' },
    { id: '5', titol: 'Milà limita el trànsit dièsel per millorar l\'aire', pais: 'Itàlia' },
    { id: '6', titol: 'Berlín impulsa l\'energia solar en edificis públics', pais: 'Alemanya' },
    { id: '7', titol: 'Amsterdam cap a zero emissions en transport urbà', pais: 'Països Baixos' },
    { id: '8', titol: 'Copenhaguen manté la meta de neutralitat carbònica 2025', pais: 'Dinamarca' },
    { id: '9', titol: 'Lisboa aposta per l\'autobús elèctric i les bicicletes', pais: 'Portugal' },
    { id: '10', titol: 'Viena premia la rehabilitació energètica d\'habitatges', pais: 'Àustria' }
  ];
  categories = [
    {
      nom: 'Guies',
      recursos: [
        { titol: 'Guia d\'estalvi energètic domèstic', text: 'Guia completa amb consells pràctics per reduir el consum energètic a casa.', font: 'Ajuntament de Barcelona', any: '2024', url: '#', tipus: 'PDF' },
        { titol: 'Manual de reciclatge a Barcelona', text: 'Explicació detallada de com separar correctament els residus segons la normativa local.', font: 'AMB (Àrea Metropolitana de Barcelona)', any: '2024', url: '#', tipus: 'PDF' }
      ]
    },
    {
      nom: 'Datasets',
      recursos: [
        { titol: 'Dades de qualitat de l\'aire (Open Data BCN)', text: 'Dataset obert amb dades històriques de qualitat de l\'aire a Barcelona.', font: 'Open Data BCN', any: '2024', url: '#', tipus: 'CSV' },
        { titol: 'Consum d\'aigua per barris', text: 'Estadístiques de consum d\'aigua desglossades per barris de Barcelona.', font: 'Aigües de Barcelona', any: '2023', url: '#', tipus: 'JSON' }
      ]
    },
    {
      nom: 'Projectes locals',
      recursos: [
        { titol: 'Barcelona + Sostenible', text: 'Programa municipal per promoure la sostenibilitat i l\'acció climàtica ciutadana.', font: 'Ajuntament de Barcelona', any: '2024', url: '#', tipus: 'Web' },
        { titol: 'Refugis climàtics', text: 'Xarxa d\'espais públics adaptats per fer front a les ones de calor.', font: 'Ajuntament de Barcelona', any: '2024', url: '#', tipus: 'Web' }
      ]
    },
    {
      nom: 'Normativa',
      recursos: [
        { titol: 'Zona de Baixes Emissions (ZBE)', text: 'Normativa sobre restriccions de circulació de vehicles a Barcelona.', font: 'AMB', any: '2024', url: '#', tipus: 'Web' },
        { titol: 'Ordenança de gestió de residus', text: 'Normativa municipal sobre separació i gestió de residus domèstics.', font: 'Ajuntament de Barcelona', any: '2023', url: '#', tipus: 'PDF' }
      ]
    }
  ];
}
