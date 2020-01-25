import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GastoComun } from '../model/gasto-comun.model';
import { ItemGastoComun } from '../model/item-gasto-comun.model';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';
import { PlantillaGastosOrdinarios } from '../model/plantilla-gastos-ordinarios.model';
import { DetalleDeudaUnidad } from '../model/detalle-deuda-unidad.model';

@Injectable({
    providedIn: 'root'
})
export class GastoComunService {

    constructor(
        private httpClient: HttpClient, private global: GlobalService
    ) {}

    public getGastoComunAbierto(): Observable<GastoComun> {
        return <Observable<GastoComun>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/abierto');
    }

    public getItems(): Observable<ItemGastoComun[]> {
        return <Observable<ItemGastoComun[]>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/item/extraordinario');
    }
    
    public actualizarGastoComun(gastoComun: GastoComun): Observable<any> {
        return this.httpClient.post(Constants.baseUrl+'/gasto-comun/', gastoComun);
    }
    
    public getPlantillaGastosOrdinarios(): Observable<PlantillaGastosOrdinarios[]> {
        return <Observable<any[]>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/plantilla/');
    }

    public getPeriodoActual(): Observable<string> {
        return <Observable<string>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/periodo-actual/');
    }

    public cerrarGastoComun(gastoComun: GastoComun): Observable<any> {
        return this.httpClient.post(Constants.baseUrl+'/gasto-comun/cerrar', gastoComun);
    }
    public prorratearGastoComun(): Observable<DetalleDeudaUnidad[]> {
        return <Observable<DetalleDeudaUnidad[]>>this.httpClient.post(Constants.baseUrl+'/gasto-comun/prorratear', null);
    }
}