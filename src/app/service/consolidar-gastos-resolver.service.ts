import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GastoComunService } from './gasto-comun.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ConsolidarGastosResolverService implements Resolve<any> {

    constructor(private gastoComunService: GastoComunService){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        
        let data: any = {};

        return this.gastoComunService.getPlantillaGastosOrdinarios().pipe(
            mergeMap(plantillaGastos =>{
                data.plantillaGastos = plantillaGastos;
                return this.gastoComunService.getGastoComunAbierto().pipe(
                    map(gastoComun => {
                        data.gastoComun = gastoComun;
                        return data;
                    })
                );
            })
        );
    }

    

}