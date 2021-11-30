import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.startsWith('https://localhost:44359/api/')) {
            request = request.clone({
                setHeaders: {
                    token: `1234`
                }
            });
        }
        return next.handle(request);
    }
}