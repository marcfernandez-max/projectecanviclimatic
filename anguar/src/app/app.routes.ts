import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AprendreComponent } from './aprendre.component';
import { ActuarComponent } from './actuar.component';
import { DadesComponent } from './dades.component';
import { RecursosComponent } from './recursos.component';
import { SobreComponent } from './sobre.component';

/**
 * Configuració de rutes de l'aplicació ClimaBCN
 * 
 * Rutes principals segons el RD:
 * - / : Portada (Home/Landing)
 * - /aprendre : Continguts per tema
 * - /actuar : Reptes interactius
 * - /dades : Panell d'indicadors
 * - /recursos : Recursos i enllaços verificats
 * - /sobre : Qui som + metodologia + crèdits
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprendre', component: AprendreComponent },
  { path: 'actuar', component: ActuarComponent },
  { path: 'dades', component: DadesComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
