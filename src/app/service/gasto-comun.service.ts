import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GastoComun } from '../model/gasto-comun.model';
import { ItemGastoComun } from '../model/item-gasto-comun.model';
import { GlobalService } from './global.service';

@Injectable({
    providedIn: 'root'
})
export class GastoComunService {

    constructor(
        private httpClient: HttpClient, private global: GlobalService
    ) {}

    public getGastoComunAbierto(): Observable<GastoComun> {
        return <Observable<GastoComun>>this.httpClient.get(this.global.baseUrl+'/gasto-comun/abierto');
    }

    public getItems(): Observable<ItemGastoComun[]> {
        return <Observable<ItemGastoComun[]>>this.httpClient.get(this.global.baseUrl+'/gasto-comun/item/');
    }

    public actualizarGastoComun(gastoComun: GastoComun): Observable<any> {
        return this.httpClient.post(this.global.baseUrl+'/gasto-comun/', gastoComun);
    }
}