import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GastoComunService } from './gasto-comun.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HomeResolverService implements Resolve<any> {

    constructor(private gastoComunService: GastoComunService){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        
        let data: any = {};

        return this.gastoComunService.getGastoComunAbierto().pipe(
            mergeMap(gastoComun =>{
                data.gastoComun = gastoComun;
                return this.gastoComunService.getItems().pipe(
                    map(items => {
                        data.items = items;
                        return data;
                    })
                );
            })
        );
    }

    

}