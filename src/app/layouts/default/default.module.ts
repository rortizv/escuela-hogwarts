import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PersonajesComponent } from 'src/app/modules/personajes/personajes.component';
import { EstudiantesComponent } from 'src/app/modules/estudiantes/estudiantes.component';
import { ProfesoresComponent } from 'src/app/modules/profesores/profesores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PersonajesComponent,
    EstudiantesComponent,
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
