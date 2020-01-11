import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public rolSeleccionado: any;

  constructor(private httpservice : HttpClient) { }

  public getRoles(): Observable<any>{
    return this.httpservice.get('http://localhost:8080/roles/');
  }

  public getPermisos(): Observable<any>{
    return this.httpservice.get('http://localhost:8080/permisos/');
  }

  
}
