import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarioSeleccionado: UsuarioModel;
  
  constructor(private httpClient: HttpClient) { }

  public getUsuarios(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/usuarios/');
  }

  public crearUsuario(usuario: UsuarioModel): Observable<any> {
    return this.httpClient.post('http://localhost:8080/usuarios/', usuario);
  }
}
