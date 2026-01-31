import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CapitalitzarPipe } from './pipes/capitalitzar.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, CapitalitzarPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
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

  titolCards = [
    {
      icon: '👨‍🎓',
      title: 'estudiants',
      description: 'Recursos curriculars adaptats per a secundària i universitat, activitats interactives i espai per presentar projectes innovadors amb feedback directe.'
    },
    {
      icon: '👩‍🏫',
      title: 'professorat',
      description: 'Materials didàctics descarregables, propostes d\'activitats avaluables amb rúbriques i eines per gestionar entregues i qualificacions des d\'un panell d\'administració.'
    },
    {
      icon: '🌍',
      title: 'ciutadania',
      description: 'Hàbits, reptes i recursos locals per transformar la consciència climàtica en accions quotidianes mesurables i impactants.'
    }
  ];

  faqs = [
    { pregunta: 'És necessari registrar-se per accedir als continguts?', resposta: 'No. Tots els recursos educatius (vídeos, podcasts, infografies) són d\'accés lliure. Només cal registrar-se si vols participar en activitats interactives, pujar projectes o accedir a funcions personalitzades com el generador de resúmens amb IA.' },
    { pregunta: 'Els continguts són gratuïts?', resposta: 'Sí, tots els recursos bàsics són completament gratuïts. Algunes funcions avançades amb IA poden requerir registre o estar limitades segons la disponibilitat del servei.' },
    { pregunta: 'Puc utilitzar els materials per a les meves classes?', resposta: 'Absolutament. Tots els recursos són descarregables i adaptables per a ús educatiu no comercial. Oferim guies didàctiques específiques per a professorat i activitats avaluables amb rúbriques.' },
    { pregunta: 'En quins idiomes està disponible la plataforma?', resposta: 'Actualment oferim contingut en català, castellà i anglès. Estem treballant per ampliar idiomes i incorporar subtítols i transcripcions automàtiques en més llengües.' },
    { pregunta: 'Com funciona el generador de resúmens amb IA?', resposta: 'Pots introduir una URL (article, vídeo) o enganxar text directament. La IA processa el contingut i genera un resum adaptat al nivell educatiu seleccionat (secundària, batxillerat, universitat), destacant conceptes clau i dades rellevants.' },
    { pregunta: 'Què tipus d\'arxius puc pujar a la secció de projectes?', resposta: 'Acceptem formats comuns: PDF, DOCX, MP4, MP3, JPG, PNG. El pes màxim per arxiu és de 50 MB. Cada projecte pot incloure fins a 5 arxius i una descripció de text.' },
    { pregunta: 'Com s\'avaluen els projectes pujats?', resposta: 'Els professors poden accedir a un panell d\'administració on visualitzen, comenten i qualifiquen projectes segons rúbriques predefinides o personalitzades. Els alumnes reben feedback directe a la plataforma.' },
    { pregunta: 'Les dades i els projectes pujats són segurs?', resposta: 'Sí. Implementem protocols de seguretat estàndard (HTTPS, encriptació de dades). Els arxius es guarden en servidors segurs i només són accessibles per l\'alumne i els professors autoritzats. Consulta la nostra Política de Privacitat per a més detalls.' },
    { pregunta: 'La plataforma és accessible per a persones amb discapacitat?', resposta: 'Sí. Complim amb les directrius WCAG 2.1 nivell AA: tots els vídeos tenen subtítols, els podcasts inclouen transcripcions, la navegació és compatible amb lectors de pantalla i oferim alternatives textuals per a tot contingut visual.' },
    { pregunta: 'Com puc contribuir o suggerir recursos?', resposta: 'Ens encantaria escoltar-te! Utilitza el formulari de contacte per proposar recursos, reportar errors o suggerir millores. També acceptem contribucions de contingut educatiu verificat.' },
    { pregunta: 'Amb quina freqüència s\'actualitzen els continguts?', resposta: 'Actualitzem els recursos regularment en funció de noves dades científiques, informes (IPCC, ONU) i esdeveniments climàtics rellevants. Les activitats i projectes destacats es renoven trimestralment.' }
  ];

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

