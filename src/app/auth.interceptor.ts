import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add authorization header to the request
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        });

        // Pass on the modified request to the next interceptor or to the HttpClient
        return next.handle(authReq);
    }

}
