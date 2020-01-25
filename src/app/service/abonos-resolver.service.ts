import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GastoComunService } from './gasto-comun.service';
import { mergeMap, map } from 'rxjs/operators';
import { DetalleDeudaUnidadService } from '../detalle-deuda-unidad.service';

@Injectable({providedIn: 'root'})
export class AbonosResolverService implements Resolve<any> {

    constructor(
        private gastoComunService: GastoComunService,
        private detalleDeudaUnidadService: DetalleDeudaUnidadService
    ){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        
        let data: any = {};

        return this.gastoComunService.getPeriodoActual().pipe(
            mergeMap(periodo=>periodo ? this.detalleDeudaUnidadService.getDetalleDeudaUnidadPorPeriodo(periodo) : [])
        );
    }

    

}