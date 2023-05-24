import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFootbalService } from '@core/services/api-football.service';
import { LocalStorageService } from '@core/services/localstorage.service';
import { switchMap, take } from 'rxjs';
import { Chart } from 'chart.js/auto';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
    loading = false;
    countrySelected: boolean;
    leagueSelected: boolean;
    wins = 0;
    draws = 0;
    loses = 0;
    goals = null;
    team = null;
    venue = null;
    players = [];
    lineups = [];
    formationMostPLayed = null;
    goalsFavor = null;
    goalsAgainst = null;

    @ViewChild('favorChart', { static: true }) favorChart: ElementRef;
    @ViewChild('againstChart', { static: true }) againstChart: ElementRef;

    constructor(
        private activeRoute: ActivatedRoute,
        private api: ApiFootbalService,
        private router: Router,
        private localstorage: LocalStorageService
    ) {}

    ngOnInit() {
        this.findTeam();
        this.findStats();
    }

    rulesOfTeam() {
        const league = this.localstorage.get('league');
        const season = this.localstorage.get('season');

        if (!season || !league) {
            this.gotToDashboard();
        }
    }

    findTeam() {
        const findTeamWithId = ({ id }) => this.api.getTeam(id);

        const observableTeam = this.activeRoute.params.pipe(
            switchMap(findTeamWithId)
        );

        observableTeam.pipe(take(1)).subscribe(({ response }) => {
            const isValidTeam = !!response.length;
            const addTeamAndVenue = () => {
                const { team, venue } = response[0];
                this.team = team;
                this.venue = venue;
            };
            isValidTeam ? addTeamAndVenue() : null;
        });
    }

    findStats() {
        const findStatsWithId = ({ id }) => this.api.getTeam(id);

        const observableStatistics = this.activeRoute.params.pipe(
            switchMap(findStatsWithId)
        );

        observableStatistics.pipe(take(1)).subscribe(({ response }) => {
            const isValidLineups = 'lineups' in response;
            const isValidBiggest = 'biggest' in response;
            const addStats = () => {
                const { lineups, biggest, goals } = response;
                const { streak } = biggest;
                this.lineups = lineups;
                this.wins = streak.wins;
                this.draws = streak.draws;
                this.loses = streak.loses;
                this.goals = goals;
                this.goalsFavor = goals.for;
                this.goalsAgainst = goals.against;
                this.formationMostPLayed = this.lineups.reduce((acc, current) =>
                    acc.played > current.played ? acc : current
                );
                this.createChartFavor();
                this.createChartAgainst();
            };
            isValidLineups && isValidBiggest ? addStats() : null;
        });
    }

    createChartFavor() {
        if (!this.isValidGoalsFavor()) {
            return;
        }

        const labels = Object.keys(this.goalsFavor.minute);
        const totals = (minute) => minute.total;
        const dataStats = Object.values(this.goalsFavor.minute).map(totals);
        const elementChar = this.favorChart.nativeElement;
        const estatistics = {
            label: 'Gols a favor',
            data: dataStats,
            backgroundColor: ['green'],
            borderWidth: 1,
        };

        new Chart(elementChar, {
            type: 'bar',
            data: {
                labels,
                datasets: [estatistics],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    isValidGoalsFavor() {
        return 'minute' in this.goalsFavor;
    }

    createChartAgainst() {
        if (!this.isValidGoalsAgainst()) {
            return;
        }

        const labels = Object.keys(this.goalsFavor.minute);
        const dataStats = Object.values(this.goalsFavor.minute).map(
            (minute: any) => minute.total
        );
        const elementChar = this.againstChart.nativeElement;
        const statistics = {
            label: 'Gols contra',
            backgroundColor: ['red'],
            data: dataStats,
            borderWidth: 1,
        };
        new Chart(elementChar, {
            type: 'bar',
            data: {
                labels,
                datasets: [statistics],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    isValidGoalsAgainst() {
        return !!this.goalsAgainst && !!this.goalsAgainst.minute;
    }

    gotToTeams() {
        const season = this.localstorage.get('season');
        const league = this.localstorage.get('league');
        this.router.navigate(['/dashboard/teams', season, league.id]);
    }

    gotToDashboard() {
        this.localstorage.remove('country');
        this.router.navigate(['/dashboard']);
    }
}
