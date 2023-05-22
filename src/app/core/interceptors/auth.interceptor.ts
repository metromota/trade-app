import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Environment } from '@core/environments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = localStorage.getItem('token');

        // if (token) {
            // Adicione os headers desejados à requisição
            const host = Environment.getHost()
            const request = req.clone({
                setHeaders: {
                    // 'Authorization': token,
                    'X-RapidAPI-Key': '2c95c67415223cd5ab9a38e9f9ec531b',
                    'X-RapidAPI-Host': host
                }
            });

            return next.handle(request);
        // }


        // return next.handle(req);
    }
}

