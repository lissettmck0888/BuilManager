import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  public getUsuarios(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/usuarios/');
  }
}
