import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '@core/security/security';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiFootbalService {
    urlApi: string = Security.getApiUrl();

    constructor(private http: HttpClient) {}

    authentication(): Observable<any> {
        return this.http.get(`${this.urlApi}/status`);
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
        return this.http.get(
            `${this.urlApi}/teams?league=${leagueid}&season=${season}`
        );
    }

    getTeam(id: number): Observable<any> {
        return this.http.get(`${this.urlApi}/teams/${id}`);
    }

    getLineups(id: number): Observable<any> {
        return this.http.get(`${this.urlApi}/teams/statistics/${id}`);
    }
}
