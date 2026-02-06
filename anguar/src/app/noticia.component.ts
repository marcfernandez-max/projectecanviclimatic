import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticia.html',
  styleUrls: ['./noticia.css']
})
export class NoticiaComponent {
  id: string | null = null;
  noticies: Record<string, { titol: string; pais: string; resum: string }> = {
    '1': { titol: 'Barcelona amplia la xarxa de refugis climàtics', pais: 'Espanya', resum: 'L\'Ajuntament obre nous espais d\'acollida per a les onades de calor amb focus en persones grans i vulnerables.' },
    '2': { titol: 'Nou pla de mobilitat sostenible a la ciutat', pais: 'Espanya', resum: 'Mesures per reduir emissions del transport i promoure la bicicleta i el transport públic.' },
    '3': { titol: 'Iniciatives europees de neutralitat climàtica 2030', pais: 'Unió Europea', resum: 'Resum de les directrius i fons europeus per a ciutats que volen avançar cap a la neutralitat climàtica.' },
    '4': { titol: 'París reforça les zones de baixes emissions al centre', pais: 'França', resum: 'Nous límits de circulació per vehicles antics al centre de París per reduir la contaminació i les emissions.' },
    '5': { titol: 'Milà limita el trànsit dièsel per millorar l\'aire', pais: 'Itàlia', resum: 'Restriccions progressives als vehicles dièsel en dies de alta contaminació a l\'àrea metropolitana.' },
    '6': { titol: 'Berlín impulsa l\'energia solar en edificis públics', pais: 'Alemanya', resum: 'Pla per instal·lar panells solars en escoles, hospitals i edificis municipals abans del 2030.' },
    '7': { titol: 'Amsterdam cap a zero emissions en transport urbà', pais: 'Països Baixos', resum: 'Amsterdam acelera la transició a vehicles elèctrics i amplia les zones sense cotxes al centre.' },
    '8': { titol: 'Copenhaguen manté la meta de neutralitat carbònica 2025', pais: 'Dinamarca', resum: 'La capital danesa manté l\'objectiu de ser neutra en carboni el 2025 amb energia eòlica i mobilitat ciclista.' },
    '9': { titol: 'Lisboa aposta per l\'autobús elèctric i les bicicletes', pais: 'Portugal', resum: 'Flota d\'autobusos elèctrics i xarxa de bicicletes públiques per reduir emissions i congestió.' },
    '10': { titol: 'Viena premia la rehabilitació energètica d\'habitatges', pais: 'Àustria', resum: 'Subvencions per rehabilitar edificis i millorar l\'eficiència energètica en l\'habitatge.' }
  };
  noticia: { titol: string; pais: string; resum: string } | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.noticia = this.id ? this.noticies[this.id] ?? null : null;
  }
}
