import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';
import { Constants } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private jwtHelperService: JwtHelperService = new JwtHelperService();

    constructor(
        private httpservice: HttpClient, 
        private globalService: GlobalService
        ) { }

    public autenticar(credenciales: any): Observable<boolean> {
        return this.httpservice.post(Constants.baseUrl+'/login', credenciales, { responseType: 'text' }).pipe(
            map(token => {
                console.log('token');
                console.log(token);
                localStorage.setItem('token', token);
                this.globalService.currentUser = this.jwtHelperService.decodeToken(token);
                console.log('decoded');
                //console.log(this.globalService.currentUser);
                return true;
            }),
            catchError(error=> of(false))
        );
    }

    public logout() {
        this.globalService.currentUser = null;
        this.globalService.permisos = null;
        localStorage.clear();
    }

    public isSessionValid(): boolean {
        return !this.jwtHelperService.isTokenExpired(localStorage.getItem('token'));
    }



}
