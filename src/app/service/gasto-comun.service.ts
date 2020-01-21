import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GastoComun } from '../model/gasto-comun.model';
import { ItemGastoComun } from '../model/item-gasto-comun.model';

@Injectable({
    providedIn: 'root'
})
export class GastoComunService {

    constructor(
        private httpClient: HttpClient
    ) {}

    public getGastoComunAbierto(): Observable<GastoComun> {
        return <Observable<GastoComun>>this.httpClient.get('http://localhost:8080/gasto-comun/abierto');
    }

    public getItems(): Observable<ItemGastoComun[]> {
        return <Observable<ItemGastoComun[]>>this.httpClient.get('http://localhost:8080/gasto-comun/item/');
    }

    public actualizarGastoComun(gastoComun: GastoComun) {
        return this.httpClient.put('http://localhost:8080/gasto-comun/', gastoComun);
    }
}