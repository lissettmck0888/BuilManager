import { Resolve } from '@angular/router';
import { GastoComunService } from './gasto-comun.service';
import { Injectable } from '@angular/core';
import { DetalleDeudaUnidad } from '../model/detalle-deuda-unidad.model';

@Injectable({providedIn: 'root'})
export class DetalleIndividualResolver implements Resolve<DetalleDeudaUnidad[]> {

    constructor(private gastoComunService: GastoComunService){}
    
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        return this.gastoComunService.prorratearGastoComun();
    }

}