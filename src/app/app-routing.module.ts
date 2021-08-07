import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EstudiantesComponent } from './modules/estudiantes/estudiantes.component';
import { PersonajesComponent } from './modules/personajes/personajes.component';
import { ProfesoresComponent } from './modules/profesores/profesores.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'personajes',
      component: PersonajesComponent
    },
    {
      path: 'estudiantes',
      component: EstudiantesComponent
    },
    {
      path: 'profesores',
      component: ProfesoresComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
