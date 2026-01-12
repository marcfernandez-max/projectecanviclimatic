/**
 * [ES] Tests unitarios del componente raíz (`App`).
 *
 * Conceptos Angular Testing:
 * - `TestBed`: "mini-inyector" y entorno de pruebas para configurar componentes/providers.
 * - En standalone, el componente se añade en `imports: [App]` (no `declarations`).
 * - `fixture`: wrapper que permite acceder a la instancia y al DOM renderizado.
 *
 * Nota: el test "should render title" parece un *placeholder* típico del scaffolding y puede no
 * corresponder con el HTML real (`app.html`).
 */
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Projecte nou');
  });
});
