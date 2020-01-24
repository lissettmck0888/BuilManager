import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GastoComun } from '../model/gasto-comun.model';
import { ItemGastoComun } from '../model/item-gasto-comun.model';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';

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
        return <Observable<ItemGastoComun[]>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/item/');
    }
    
    public actualizarGastoComun(gastoComun: GastoComun): Observable<any> {
        return this.httpClient.post(Constants.baseUrl+'/gasto-comun/', gastoComun);
    }
    
    public getPlantillaGastosOrdinarios(): Observable<any[]> {
        return <Observable<any[]>>this.httpClient.get(Constants.baseUrl+'/gasto-comun/plantilla/');
    }
}