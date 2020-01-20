import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GlobalService } from '../service/global.service';

@Injectable({
  providedIn: 'root'
})
export class MainResolverService implements Resolve<any> {
  
  constructor(
    private globalService: GlobalService
  ) { }
  
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    console.log('on mainResolver...');
    return this.globalService.getCurrentUser();
  }
  
}
