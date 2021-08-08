import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'src/app/services/message.service';
import { profesorFromDB } from '../../interfaces/profesorFromDB';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public dataSource!: MatTableDataSource<profesorFromDB>;
  public age: number;
  
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private profesoresService: ProfesoresService,
    private messageService: MessageService,
    private router: Router
  ) { 
    this.age = 0;
   }

  ngOnInit(): void {
    this.listarEstudiantes();
  }

  listarEstudiantes() {
    this.profesoresService.listarProfesores().subscribe(
      (response: Array<profesorFromDB>) => {
        var mappedDataSource = response.map(profesor => { 
          profesor.age = this.calcularEdad(profesor.dateOfBirth);
          return profesor;
        });
        this.dataSource = new MatTableDataSource<profesorFromDB>(mappedDataSource);
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
