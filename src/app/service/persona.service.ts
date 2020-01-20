import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient) { }

  public getByFilter(filter: string): Observable<Persona[]>{
    return <Observable<Persona[]>>this.httpservice.get('http://localhost:8080/persona/?filter=' + filter);
  }
  public getAll(): Observable<Persona[]>{
    return <Observable<Persona[]>>this.httpservice.get('http://localhost:8080/persona/all');
  }
  public agregarPersona(persona: Persona): Observable<any>{
    return this.httpservice.post('http://localhost:8080/persona/', persona);
  }
  
}
