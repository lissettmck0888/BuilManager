import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private loginService: LoginService,
        private router: Router
    ){}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.can();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.can();
    }
    
    private can(): boolean {
        if(this.loginService.isSessionValid()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}