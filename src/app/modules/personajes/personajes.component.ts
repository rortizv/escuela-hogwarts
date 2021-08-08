import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { casaIn } from '../../interfaces/casaIn';
import { PersonajesService } from '../../services/personajes.service';
import { MessageService } from '../../services/message.service';
import { personajeFromDB } from 'src/app/interfaces/personajeFromDB';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public casaForm: FormGroup;
  public dataSource!: MatTableDataSource<personajeFromDB>;
  public age: number;
  public casas: casaIn[] = [
    {nombreCasa: 'slytherin', viewValue: 'Slytherin'},
    {nombreCasa: 'gryffindor', viewValue: 'Gryffindor'},
    {nombreCasa: 'ravenclaw', viewValue: 'Ravenclaw'},
    {nombreCasa: 'hufflepuff', viewValue: 'Hufflepuff'}
  ];

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private personajeService: PersonajesService,
    private messageService: MessageService,
    private router: Router
  ) { 
    this.casaForm = new FormGroup({});
    this.age = 0;
   }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.casaForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  listarPersonajes(nombreCasa: string) {
    this.personajeService.listarPersonajes(nombreCasa).subscribe(
      (response: Array<personajeFromDB>) => {
        this.dataSource = new MatTableDataSource<personajeFromDB>(response);
      },
      (error: any) => {
        this.messageService.showMessage("ERROR AL OBTENER LOS DATOS.");
        this.router.navigate(["/personajes"]);
      }
    )
  }

  calcularEdad(dateOfBirth: string) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

}
