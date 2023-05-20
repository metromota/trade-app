import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "environments/enviroments";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiFootbalService {
    urlApi: string = Environment.getApiUrl();
    constructor(private http: HttpClient) {
    }

    authentication(): Observable<any> {
        return this.http.get(`${this.urlApi}/authentication`);
    }

    getCountries(): Observable<any> {
        return this.http.get(`${this.urlApi}/countries`);
    }

    getTemporaries(): Observable<any> {
        return this.http.get(`${this.urlApi}/temporaries`);
    }

}