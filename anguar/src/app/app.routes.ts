import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AprendreComponent } from './aprendre.component';
import { RecursosComponent } from './recursos.component';
import { SobreComponent } from './sobre.component';
import { ContaminacioComponent } from './contaminacio.component';
import { NoticiaComponent } from './noticia.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprendre', component: AprendreComponent },
  { path: 'contaminacio', component: ContaminacioComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
