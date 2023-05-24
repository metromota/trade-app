import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
} from '@angular/common/http';
import { Security } from '@core/security/security';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const host = Security.getHost();
        const apikey = Security.getApikey();
        const request = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': apikey,
                'X-RapidAPI-Host': host,
            },
        });

        return next.handle(request);
    }
}
