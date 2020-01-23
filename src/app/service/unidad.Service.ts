import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

 
  
  constructor(private httpClient: HttpClient, private global: GlobalService) { }

  public getUnidadesSinAsignacionUnidadCopropiedad(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/unidades/sin-asignacion/unidad-copropiedad');
  }

  public getUnidadesSinAsignacion(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/unidades/sin-asignacion/');
  }

  public getUnidadesParaArriendo(): Observable<any> {
    return this.httpClient.get(this.global.baseUrl+'/unidades/disponibles');
  }

  
}