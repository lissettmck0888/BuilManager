import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './shared/constants';
import { DetalleDeudaUnidad } from './model/detalle-deuda-unidad.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleDeudaUnidadService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getDetalleDeudaUnidadPorPeriodo(periodo: string): Observable<DetalleDeudaUnidad[]> {
    return <Observable<DetalleDeudaUnidad[]>>this.httpClient.get(Constants.baseUrl + 'deuda/periodo/' + periodo);
  }
}
