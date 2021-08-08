import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { profesorFromDB } from '../interfaces/profesorFromDB';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

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

  listarProfesores(): Observable<Array<profesorFromDB>> {
    const endpoint = `api/characters/staff/`;
    const url = `${this.API_URL}${endpoint}`;
    return this.http.get<Array<profesorFromDB>>(url);
  }
  
}