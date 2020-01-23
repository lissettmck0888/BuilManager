import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient/* , private global: GlobalService */) { }

  public getRoles(): Observable<any>{
    return this.httpservice.get('http://190.46.181.162:8080/roles/');
  }

  public getPermisos(): Observable<any>{
    return this.httpservice.get('http://190.46.181.162:8080/permisos/');
  }

  public getPermisosRol(rol:string): Observable<any>{
    return this.httpservice.get('http://190.46.181.162:8080/permisos/rol/' + rol);
  }

  public guardarRol(rol:any): Observable<any> {
    return this.httpservice.post('http://190.46.181.162:8080/roles/', rol);
  }
  
  
}
