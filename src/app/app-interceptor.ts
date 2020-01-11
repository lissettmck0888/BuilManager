import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class AppInterceptor implements HttpInterceptor {

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
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }

}