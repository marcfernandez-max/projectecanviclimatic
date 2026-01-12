import {Pipe, PipeTransform} from '@angular/core';

/**
 * [ES] Pipe `nivell`: convierte un número en una cadena de estrellas.
 *
 * Ejemplo: `{{ 3 | nivell }}` -> `"⭐⭐⭐"`.
 *
 * Nota: en Angular, los pipes se usan para *presentación* (no para lógica de negocio).
 */
@Pipe({
  name: 'nivell',
  standalone: true,
})
export class NivellPipe implements PipeTransform {
  transform(valor: number): string {
    const repeticions = Math.max(0, Math.floor(Number(valor) || 0));
    return '⭐'.repeat(repeticions);
  }
}