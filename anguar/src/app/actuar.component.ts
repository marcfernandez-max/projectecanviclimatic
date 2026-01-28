import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Component: Actuar
 * 
 * Objectiu: Passar a l'acció amb interacció i reforç
 * 
 * Reptes (fase 1):
 * - Separació de residus: drag & drop (amb alternativa accessible)
 * - Checklist d'estalvi energètic: marcar hàbits i veure impacte estimat
 * - Quiz curt: 5 preguntes, feedback immediat
 */
@Component({
  selector: 'app-actuar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actuar.html',
  styleUrls: ['./actuar.css']
})
export class ActuarComponent {
  // Repte 1: Separació de residus
  items = [
    { id: 1, name: 'Botella de plàstic', type: 'plastic', icon: '🧴' },
    { id: 2, name: 'Caixa de cartó', type: 'cartro', icon: '📦' },
    { id: 3, name: 'Ampolla de vidre', type: 'vidre', icon: '🍾' },
    { id: 4, name: 'Poma', type: 'organic', icon: '🍎' },
    { id: 5, name: 'Guants usats', type: 'residuos', icon: '🧤' }
  ];

  bins = [
    { id: 'plastic', name: 'Plàstic', icon: '🟡' },
    { id: 'cartro', name: 'Cartó', icon: '🔵' },
    { id: 'vidre', name: 'Vidre', icon: '🟢' },
    { id: 'organic', name: 'Orgànic', icon: '🟤' },
    { id: 'residuos', name: 'Resta', icon: '⚫' }
  ];

  selectedItems: { [key: string]: number[] } = {
    plastic: [],
    cartro: [],
    vidre: [],
    organic: [],
    residuos: []
  };

  message = '';

  // Repte 2: Checklist d'estalvi energètic
  habits = [
    { id: 1, text: 'Apagar les llums quan surto de l\'habitació', checked: false, impact: 'Estalvi: 5% energia' },
    { id: 2, text: 'Desconnectar carregadors quan no s\'utilitzen', checked: false, impact: 'Estalvi: 2% energia' },
    { id: 3, text: 'Utilitzar llums LED', checked: false, impact: 'Estalvi: 80% energia' },
    { id: 4, text: 'Ajustar termòstat 2°C menys a l\'hivern', checked: false, impact: 'Estalvi: 10% calefacció' },
    { id: 5, text: 'Tancar finestres quan hi ha calefacció/aire condicionat', checked: false, impact: 'Estalvi: 15% energia' }
  ];

  totalImpact = 0;

  // Repte 3: Quiz
  quizQuestions = [
    {
      question: 'Quin és el principal gas d\'efecte hivernacle?',
      options: ['Oxigen', 'CO₂', 'Nitrogen', 'Hidrogen'],
      correct: 1,
      selected: -1
    },
    {
      question: 'Quants graus ha augmentat la temperatura global des de l\'era preindustrial?',
      options: ['0.5°C', '1.1°C', '2.0°C', '3.5°C'],
      correct: 1,
      selected: -1
    },
    {
      question: 'Quin percentatge d\'emissions cal reduir abans del 2030?',
      options: ['30%', '50%', '67%', '80%'],
      correct: 2,
      selected: -1
    }
  ];

  quizScore = 0;
  quizCompleted = false;

  // Funcions per al repte de residus
  selectItem(itemId: number, binId: string): void {
    // Eliminar de qualsevol altre contenidor
    Object.keys(this.selectedItems).forEach(key => {
      const index = this.selectedItems[key].indexOf(itemId);
      if (index > -1) {
        this.selectedItems[key].splice(index, 1);
      }
    });

    // Afegir al contenidor seleccionat
    if (!this.selectedItems[binId].includes(itemId)) {
      this.selectedItems[binId].push(itemId);
    }

    this.checkResidusCompletion();
  }

  checkResidusCompletion(): void {
    const allPlaced = this.items.every(item => {
      return Object.values(this.selectedItems).some(bin => bin.includes(item.id));
    });

    if (allPlaced) {
      const allCorrect = this.items.every(item => {
        return this.selectedItems[item.type].includes(item.id);
      });

      if (allCorrect) {
        this.message = '✅ Perfecte! Has separat correctament tots els residus.';
      } else {
        this.message = '⚠️ Alguns residus no estan al contenidor correcte. Revisa\'ls!';
      }
    } else {
      this.message = '';
    }
  }

  // Funcions per al checklist
  toggleHabit(id: number): void {
    const habit = this.habits.find(h => h.id === id);
    if (habit) {
      habit.checked = !habit.checked;
      this.calculateImpact();
    }
  }

  calculateImpact(): void {
    this.totalImpact = this.habits
      .filter(h => h.checked)
      .reduce((sum, h) => {
        const num = parseInt(h.impact.match(/\d+/)?.[0] || '0');
        return sum + num;
      }, 0);
  }

  // Funcions per al quiz
  selectAnswer(questionIndex: number, optionIndex: number): void {
    this.quizQuestions[questionIndex].selected = optionIndex;
  }

  submitQuiz(): void {
    this.quizScore = this.quizQuestions.filter(
      (q, index) => q.selected === q.correct
    ).length;
    this.quizCompleted = true;
  }

  allQuestionsAnswered(): boolean {
    return this.quizQuestions.every(q => q.selected !== -1);
  }

  isItemPlaced(itemId: number): boolean {
    return Object.values(this.selectedItems).some(bin => bin.includes(itemId));
  }

  selectItemForBin(binId: string): void {
    // Aquesta funció es pot millorar amb un modal o selector
    // Per ara, es fa servir selectItem directament
  }

  getItemIcon(itemId: number): string {
    const item = this.items.find(i => i.id === itemId);
    return item ? item.icon : '❓';
  }
}

