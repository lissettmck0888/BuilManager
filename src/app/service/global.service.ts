import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RolService } from './rol.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    public baseUrl: string = 'http://190.46.181.162:8080';
    private jwtHelperService: JwtHelperService = new JwtHelperService();
    
    private _currentUser: UserModel;
    private _permisos: any[];

    constructor(private rolService: RolService) { }

    public getCurrentUser(): Observable<UserModel> {
        if(!this._currentUser) {
            this._currentUser = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
            if(this._currentUser){
                console.log('recuperando permisos usuario...');
                return this.rolService.getPermisosRol(this._currentUser.rol).pipe(
                    map(permisos=>{
                        this.permisos = permisos;
                        return this._currentUser;
                    })
                );
            }
        }
        return new Observable(obs=>{
            obs.next(this._currentUser);
            obs.complete();
        });
    }

    set currentUser(user: UserModel) {
        this._currentUser = user;
    }

    get permisos(): any[] {
        if(this._permisos){

        }
        return this._permisos;
    }

    set permisos(permisos: any[]) {
        this._permisos = permisos;
    }
}
