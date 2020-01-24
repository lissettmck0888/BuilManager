import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient/* , private global: GlobalService */) { }

  public getRoles(): Observable<any>{
    return this.httpservice.get(Constants.baseUrl+'/roles/');
  }

  public getPermisos(): Observable<any>{
    return this.httpservice.get(Constants.baseUrl+'/permisos/');
  }

  public getPermisosRol(rol:string): Observable<any>{
    return this.httpservice.get(Constants.baseUrl+'/permisos/rol/' + rol);
  }

  public guardarRol(rol:any): Observable<any> {
    return this.httpservice.post(Constants.baseUrl+'/roles/', rol);
  }
  
  
}
