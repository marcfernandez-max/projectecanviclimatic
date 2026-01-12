import {Pipe, PipeTransform} from '@angular/core';

/**
 * [ES] Pipe `qualificacio`: mapea una nota numérica a una abreviatura (MD/I/SF/B/N/EX).
 *
 * Ejemplo: `{{ 7 | qualificacio }}` -> `"N"`.
 *
 * Nota: convendría validar rangos para evitar `undefined` si llega un valor fuera de 0..10.
 */
@Pipe({
  name: 'qualificacio',
  standalone: true,
})
export class QualificacioPipe implements PipeTransform {
  transform(valor: number): string {
    const notes = ['MD','I','I','I','I','SF','B','N','N','EX', 'EX']; 
    const v = Number(valor);
    return notes[v];
  }
}