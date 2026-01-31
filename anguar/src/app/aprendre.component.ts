import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aprendre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aprendre.html',
  styleUrls: ['./aprendre.css']
})
export class AprendreComponent {
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

  temaSeleccionat = this.temas[0];

  seleccionarTema(tema: any): void {
    this.temaSeleccionat = tema;
  }
}
