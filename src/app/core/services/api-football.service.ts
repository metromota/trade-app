import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "@core/environments/enviroments";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiFootbalService {

    urlApi: string = Environment.getApiUrl();

    constructor(private http: HttpClient) {
    }

    authentication(apikey: string): Observable<any> {
        return this.http.get(`${this.urlApi}/authentication`);
    }

    getCountries(): Observable<any> {
        return this.http.get(`${this.urlApi}/countries`);
    }

    getLeague(id: number): Observable<any> {
        return this.http.get(`${this.urlApi}/leagues${id}`);
    }

    getLeaguesForCountry(country: string): Observable<any> {
        return this.http.get(`${this.urlApi}/leagues?country=${country}`);
    }

    getSeasons(): Observable<any> {
        return this.http.get(`${this.urlApi}/leagues/seasons`);
    }

    getTeamsOfSeason(season: number, leagueid: number): Observable<any> {
        return this.http.get(`${this.urlApi}/teams?league=${leagueid}&season=${season}`);
    }

    getTeam(id: number): Observable<any> {
        return this.http.get(`${this.urlApi}/teams/${id}`);
    }

}