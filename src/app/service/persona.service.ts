import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient, private global: GlobalService) { }

  public getByFilter(filter: string): Observable<Persona[]>{
    return <Observable<Persona[]>>this.httpservice.get(Constants.baseUrl+'/persona/?filter=' + filter);
  }
  public getAll(): Observable<Persona[]>{
    return <Observable<Persona[]>>this.httpservice.get(Constants.baseUrl+'/persona/all');
  }
  public agregarPersona(persona: Persona): Observable<any>{
    return this.httpservice.post(Constants.baseUrl+'/persona/', persona);
  }
  
}
