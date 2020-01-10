import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpservice : HttpClient) { }

  public getRol(): Observable<any>{
    return this.httpservice.get('http://localhost:8080/roles/');
  }
}
