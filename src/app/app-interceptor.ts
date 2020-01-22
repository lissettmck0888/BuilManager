import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GlobalService } from './service/global.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

export class AppInterceptor implements HttpInterceptor {

    constructor(
        private globalService: GlobalService, 
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }

        const token = localStorage.getItem('token');
        if (token) {
            const clonedRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            clonedRequest.headers.set('Access-Control-Allow-Origin', '*');
            return this.handleRequest(clonedRequest, next);
        }
        return this.handleRequest(req, next);
    }

    private handleRequest(request: HttpRequest<any>, handler: HttpHandler) {
        return handler.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                }
                return throwError(error);
            })
        );
    }

}