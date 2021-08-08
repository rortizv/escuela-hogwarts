import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { personajeFromDB } from '../interfaces/personajeFromDB';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private API_URL: string;
  //private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL_CORE;
    // this.headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    //   .set('Accept', 'application/json');
  }

  listarPersonajes(filter?: string): Observable<Array<personajeFromDB>> {
    const endpoint = `api/characters/house/${filter}`;
    const url = `${this.API_URL}${endpoint}`;
    return this.http.get<Array<personajeFromDB>>(url);
  }
  
}
