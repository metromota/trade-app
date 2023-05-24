import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFootbalService } from '@core/services/api-football.service';
import { LocalStorageService } from '@core/services/localstorage.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements DoCheck {
    leagueSelected = false;
    loading = false;
    teams = [];

    constructor(
        private api: ApiFootbalService,
        private localstorage: LocalStorageService,
        private activeRoute: ActivatedRoute,
        private route: Router
    ) {}

    ngOnInit() {
        this.rulesOfTeams();

        this.leagueSelected = !!this.localstorage.get('league');
        this.activeRoute.paramMap.subscribe((params) => {
            const season = params.get('season');
            const league = params.get('league');
            if (season && league) {
                this.getTeams(season, league);
            }
        });
    }

    ngDoCheck(): void {
        this.rulesOfTeams();
    }

    rulesOfTeams() {
        const leagues = this.localstorage.get('league');
        if (!leagues) {
            this.goToLeagues();
        }
    }

    getTeams(season, league) {
        this.changeLoading();

        const { id } = league;
        const teamsOfSeason = this.api
            .getTeamsOfSeason(season, id)
            .pipe(take(1));

        teamsOfSeason.subscribe(({ response }) => {
            const validTeams = !!response.length;
            if (validTeams) {
                this.teams = response;
            }
            this.changeUnloading();
        });
    }

    goToLeagues() {
        this.clearLeague();
        this.clearSeason();
        const country = this.localstorage.get('country');
        this.route.navigate(['/dashboard/leagues', country.name]);
    }

    clearLeague() {
        this.localstorage.remove('league');
    }

    clearSeason() {
        this.localstorage.remove('season');
    }

    changeLoading() {
        this.loading = true;
    }

    changeUnloading() {
        this.loading = false;
    }

    teamSelected(id) {
        this.route.navigate(['/dashboard/team', id]);
    }
}
