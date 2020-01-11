import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpservice: HttpClient) { }

    public autenticar(credenciales: any): Observable<boolean> {
        return this.httpservice.post('http://localhost:8080/login', credenciales, { responseType: 'text' }).pipe(
            map(token => {
                console.log('token');
                console.log(token);
                localStorage.setItem('token', token);
                return true;
            })
        );
    }



}
