import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RolService } from './rol.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    private jwtHelperService: JwtHelperService = new JwtHelperService();
    
    private _currentUser: UserModel;
    private _permisos: any[];

    constructor(private rolService: RolService) { }

    get currentUser(): UserModel {
        if(!this._currentUser) {
            this._currentUser = this.jwtHelperService.decodeToken(localStorage.getItem('token'));
            if(this._currentUser){
                this.rolService.getPermisosRol(this._currentUser.rol).subscribe(data=>{
                    this.permisos = data;
                });
            }
        }
        return this._currentUser;
    }

    set currentUser(user: UserModel) {
        this._currentUser = user;
    }

    get permisos(): any[] {
        return this._permisos;
    }

    set permisos(permisos: any[]) {
        this._permisos = permisos;
    }
}
