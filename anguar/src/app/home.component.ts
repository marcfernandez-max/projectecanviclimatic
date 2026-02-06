import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CapitalitzarPipe } from './pipes/capitalitzar.pipe';
import { MaiusculesPipe } from './pipes/maiuscules.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, CapitalitzarPipe, MaiusculesPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  stats = [
    { number: '+1,1 °C', label: 'Augment de temperatura global', icon: '🌡️', title: 'Temperatura Global', description: 'L\'augment de 1,1°C respecte a nivells preindustrials ja està causant efectes devastadors: ones de calor extremes, sequeres prolongades i alteració dels ecosistemes.' },
    { number: '419 ppm', label: 'CO₂ a l\'atmosfera (màxim històric)', icon: '☁️', title: 'CO₂ Atmosfèric', description: 'El nivell de CO₂ ha superat els 419 ppm, el més alt en 3 milions d\'anys. Aquest gas d\'efecte hivernacle és el principal causant del canvi climàtic actual.' },
    { number: '258M', label: 'Persones afectades anualment', icon: '👥', title: 'Impacte Humà', description: 'Cada any, 258 milions de persones pateixen les conseqüències directes del canvi climàtic: inundacions, sequeres, pèrdua de collites i desplaçament forçat.' },
    { number: '67%', label: 'Reducció d\'emissions necessària per 2030', icon: '📉', title: 'Objectiu 2030', description: 'Per limitar l\'escalfament a 1,5°C, necessitem reduir les emissions globals un 67% abans del 2030. És un repte ambiciós però assolible amb voluntat política.' }
  ];

  titolCards = [
    { icon: '🎓', title: 'estudiants', description: 'Recursos curriculars adaptats per a secundària i universitat, activitats interactives i espai per presentar projectes innovadors amb feedback directe.' },
    { icon: '👩‍🏫', title: 'professorat', description: 'Materials didàctics descarregables, propostes d\'activitats avaluables amb rúbriques i eines per gestionar entregues i qualificacions des d\'un panell d\'administració.' },
    { icon: '🌍', title: 'ciutadania', description: 'Hàbits, reptes i recursos locali per transformar la consciència climàtica en accions quotidianes mesurables i impactants.' }
  ];

  faqs = [
    { pregunta: 'És necessari registrar-se per accedir als continguts?', resposta: 'No. Tots els recursos educatius són d\'accés lliure. Només cal registrar-se per activitats interactives o pujar projectes.' },
    { pregunta: 'Els continguts són gratuïts?', resposta: 'Sí, tots els recursos bàsics són gratuïts. Algunes funcions avançades poden requerir registre.' },
    { pregunta: 'Puc utilitzar els materials per a les meves classes?', resposta: 'Sí. Tots els recursos són descarregables i adaptables per a ús educatiu. Oferim guies didàctiques i activitats avaluables.' },
    { pregunta: 'En quins idiomes està disponible?', resposta: 'Actualment oferim contingut en català, castellà i anglès.' },
    { pregunta: 'Com funciona el generador de resums?', resposta: 'Pots introduir una URL o enganxar text. El sistema genera un resum adaptat al nivell educatiu (secundària, batxillerat, universitat).' },
    { pregunta: 'Què tipus d\'arxius puc pujar?', resposta: 'PDF, DOCX, MP4, MP3, JPG, PNG. Màxim 50 MB per arxiu.' },
    { pregunta: 'Com s\'avaluen els projectes?', resposta: 'Els professors accedeixen al panell d\'administració, visualitzen i qualifiquen segons rúbriques. Els alumnes reben feedback a la plataforma.' },
    { pregunta: 'Les dades són segures?', resposta: 'Sí. HTTPS, encriptació. Els arxius només són accessibles per l\'alumne i professors autoritzats.' },
    { pregunta: 'És accessible per a personas amb discapacitat?', resposta: 'Sí. Complim WCAG 2.1 AA: subtítols, transcripcions, navegació amb lector de pantalla.' },
    { pregunta: 'Com puc contribuir?', resposta: 'Formulari de contacte per proposar recursos, reportar errors o suggerir millores.' },
    { pregunta: 'Amb quina freqüència s\'actualitzen els continguts?', resposta: 'Regularment segons noves dades, informes IPCC/ONU i esdeveniments climàtics. Activitats destacades es renoven trimestralment.' }
  ];

  cartesVoltades: Set<number> = new Set();

  toggleFlip(i: number): void {
    if (this.cartesVoltades.has(i)) {
      this.cartesVoltades.delete(i);
    } else {
      this.cartesVoltades.add(i);
    }
  }

  isFlipped(i: number): boolean {
    return this.cartesVoltades.has(i);
  }
}
