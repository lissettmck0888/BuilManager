import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignacion } from '../model/asignacion.model';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient) { }

  public guardarAsignacion(asignacion: Asignacion): Observable<any>{
    return this.httpservice.post('http://localhost:8080/asignacion/', asignacion);
  }
  
  public obtenerAsignaciones(): Observable<Asignacion[]>{
    return <Observable<Asignacion[]>>this.httpservice.get('http://localhost:8080/asignacion/all');
  }
  
}
