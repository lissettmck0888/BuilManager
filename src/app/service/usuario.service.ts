import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';
import { GlobalService } from './global.service';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarioSeleccionado: UsuarioModel;
  private idUsuario: any[];
  
  constructor(private httpClient: HttpClient, private global: GlobalService) { }

  public getUsuarios(): Observable<any> {
    return this.httpClient.get(Constants.baseUrl+'/usuarios/');
  }

  public crearUsuario(usuario: UsuarioModel): Observable<any> {
    return this.httpClient.post(Constants.baseUrl+'/usuarios/', usuario);
  }

  public eliminarUsuario(idUsuario): Observable<any>{
    return this.httpClient.delete(Constants.baseUrl+'/usuarios/'+idUsuario);
  }
}
