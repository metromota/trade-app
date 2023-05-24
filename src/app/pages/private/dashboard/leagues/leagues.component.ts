import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFootbalService } from '@core/services/api-football.service';
import { LocalStorageService } from '@core/services/localstorage.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-leagues',
    templateUrl: './leagues.component.html',
    styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements DoCheck {
    countrySelected = true;
    leagueSelected = false;
    loading = false;
    leagues = [];

    constructor(
        private localstorage: LocalStorageService,
        private api: ApiFootbalService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.ruleOfLeagues();

        this.activeRoute.paramMap.subscribe((params) => {
            const country = params.get('country');
            this.countrySelected = !!this.localstorage.get('country');

            if (country && this.countrySelected) {
                this.getLeagues(country);
            }
        });
    }

    ngDoCheck(): void {
        this.ruleOfLeagues();
    }

    ruleOfLeagues() {
        const country = this.localstorage.get('country');
        if (!country) {
            this.goToCountries();
        }
    }

    getLeagues(country) {
        this.changeLoading();

        const leaguesOfApi = this.api
            .getLeaguesForCountry(country.name)
            .pipe(take(1));

        leaguesOfApi.subscribe(({ response }) => {
            const validLeagues = !!response.length;
            if (validLeagues) {
                this.leagues = response;
            }
            this.changeUnloading();
        });
    }

    selectSeasonAndLeague(event) {
        const { league, season } = event;
        this.localstorage.set('league', league);
        this.localstorage.set('season', season);
        this.router.navigate(['/dashboard/teams', season, league.id]);
    }

    changeLoading() {
        this.loading = true;
    }

    changeUnloading() {
        this.loading = false;
    }

    goToCountries() {
        this.clearCountry();
        this.router.navigate(['/dashboard']);
    }

    clearCountry() {
        this.localstorage.remove('country');
    }
}
