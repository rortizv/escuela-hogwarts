import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../../services/message.service';
import { personajeFromDB } from 'src/app/interfaces/personajeFromDB';
import { Router } from '@angular/router';
import { estudianteFromDB } from 'src/app/interfaces/estudianteFromDB';
import { EstudiantesService } from '../../services/estudiantes.service';
import * as moment from 'moment';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public dataSource!: MatTableDataSource<personajeFromDB>;
  public age: number;
  
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private estudiantesService: EstudiantesService,
    private messageService: MessageService,
    private router: Router
  ) { 
    this.age = 0;
   }

  ngOnInit(): void {
    this.listarEstudiantes();
  }

  listarEstudiantes() {
    this.estudiantesService.listarEstudiantes().subscribe(
      (response: Array<estudianteFromDB>) => {
        var mappedDataSource = response.map(estudiante => { 
          estudiante.age = this.calcularEdad(estudiante.dateOfBirth);
          return estudiante;
        });
        this.dataSource = new MatTableDataSource<estudianteFromDB>(mappedDataSource);
      },
      (error: any) => {
        this.messageService.showMessage("ERROR AL OBTENER LOS DATOS.");
        this.router.navigate(["/"]);
      }
    )
  }

  calcularEdad(dateOfBirth: string) {
    var age = (dateOfBirth) ? moment().diff(dateOfBirth, 'years', false) : 0 ;
    return age;
  }

}
