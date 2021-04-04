import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleDeudaUnidad } from '../model/detalle-deuda-unidad.model';
import { Movimiento } from '../model/movimiento.model';
import { Constants } from '../shared/constants';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AbonosService {

  public detalleDeuda : DetalleDeudaUnidad;
  constructor(private httpClient : HttpClient, private globalService : GlobalService) { }

  public guardarAbono(movimiento: Movimiento): Observable<any>{
    return this.httpClient.post(Constants.baseUrl+'/abono/', movimiento);
  }

}
