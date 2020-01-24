import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignacion } from '../model/asignacion.model';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient, private global: GlobalService) { }

  public guardarAsignacion(asignacion: Asignacion): Observable<any>{
    return this.httpservice.post(Constants.baseUrl+'/asignacion/', asignacion);
  }
  
  public obtenerAsignaciones(): Observable<Asignacion[]>{
    return <Observable<Asignacion[]>>this.httpservice.get(Constants.baseUrl+'/asignacion/all');
  }
  
}
