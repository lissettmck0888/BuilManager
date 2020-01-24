import { Resolve } from '@angular/router';
import { GastoComunService } from './gasto-comun.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DetalleIndividualResolver implements Resolve<any> {

    constructor(private gastoComunService: GastoComunService){}
    
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        return this.gastoComunService.prorratearGastoComun();
    }

}