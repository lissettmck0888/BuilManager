import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

 
  
  constructor(private httpClient: HttpClient, private global: GlobalService) { }

  public getUnidadesSinAsignacionUnidadCopropiedad(): Observable<any> {
    return this.httpClient.get(Constants.baseUrl+'/unidades/sin-asignacion/unidad-copropiedad');
  }

  public getUnidadesSinAsignacion(): Observable<any> {
    return this.httpClient.get(Constants.baseUrl+'/unidades/sin-asignacion/');
  }

  public getUnidadesParaArriendo(): Observable<any> {
    return this.httpClient.get(Constants.baseUrl+'/unidades/disponibles');
  }

  
}