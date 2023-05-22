import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ApiFootbalService } from '@core/services/api-football.service';
import { Country } from 'app/share/models/country';
import { take } from 'rxjs';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({ opacity: 0 })),
            transition(':enter, :leave', [
                animate(100)
            ])
        ])
    ]
})
export class WelcomeComponent {
    countrySelected = false;
    leagueSelected = null;
    seasonSelected = 0;
    loading = false

    // tem que ser um array vazio para entregar
    countries: Country[] = [
        {
            name: 'Abelha',
            code: 'AB',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'CdBarato',
            code: 'CD',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'EducaoFisica',
            code: 'EF',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'HiV',
            code: 'HI',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'Amoto',
            code: 'TT',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'Teclado',
            code: 'WQ',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
        {
            name: 'Hexa',
            code: 'FF',
            flag: 'https://media.api-sports.io/flags/gb.svg',
        },
    ];

    // tem que ser um array vazio para entregar
    seasons = [
        2008, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    ];

    // tem quer ser um array vazio
    leagues = [
        {
            league: {
                id: 39,
                name: 'Premier League',
                type: 'League',
                logo: 'https://media.api-sports.io/football/leagues/2.png',
            },
            country: {
                name: 'England',
                code: 'GB',
                flag: 'https://media.api-sports.io/flags/gb.svg',
            },
            seasons: [
                {
                    year: 2010,
                    start: '2010-08-14',
                    end: '2011-05-17',
                    current: false,
                    coverage: {},
                },
                {
                    year: 2011,
                    start: '2011-08-13',
                    end: '2012-05-13',
                    current: false,
                    coverage: {},
                },
            ],
        },
        {
            league: {
                id: 40,
                name: 'Premier League',
                type: 'League',
                logo: 'https://media.api-sports.io/football/leagues/2.png',
            },
            country: {
                name: 'England',
                code: 'GB',
                flag: 'https://media.api-sports.io/flags/gb.svg',
            },
            seasons: [
                {
                    year: 2010,
                    start: '2010-08-14',
                    end: '2011-05-17',
                    current: false,
                    coverage: {},
                },
                {
                    year: 2011,
                    start: '2011-08-13',
                    end: '2012-05-13',
                    current: false,
                    coverage: {},
                },
            ],
        },
    ];

    teams = [
        {
            team: {
                id: 33,
                name: 'Manchester United',
                code: 'MUN',
                country: 'England',
                founded: 1878,
                national: false,
                logo: 'https://media.api-sports.io/football/teams/33.png',
            },
            venue: {
                id: 556,
                name: 'Old Trafford',
                address: 'Sir Matt Busby Way',
                city: 'Manchester',
                capacity: 76212,
                surface: 'grass',
                image: 'https://media.api-sports.io/football/venues/556.png',
            },
        },
        {
            team: {
                id: 34,
                name: 'Manchester United 2',
                code: 'MUN',
                country: 'England',
                founded: 1878,
                national: false,
                logo: 'https://media.api-sports.io/football/teams/33.png',
            },
            venue: {
                id: 556,
                name: 'Old Trafford',
                address: 'Sir Matt Busby Way',
                city: 'Manchester',
                capacity: 76212,
                surface: 'grass',
                image: 'https://media.api-sports.io/football/venues/556.png',
            },
        },
    ];

    constructor(private api: ApiFootbalService) { }

    ngOnInit() {
        // this.getCountries();
    }

    changeLoading() {
        this.loading = !this.loading;
    }

    getCountries() {
        this.changeLoading()
        this.api
            .getCountries()
            .pipe(take(1))
            .subscribe(({ response }) => {
                const validaCountries = !!response.length;
                if (validaCountries) {
                    const minusWorld = (country) => country.name !== 'World';
                    this.countries = response.filter(minusWorld);
                }
                this.changeLoading()
            });
    }

    getLeagues() {
        console.log('buscou a liga')
        return

        const [countrySelected] = this.countries.filter(
            (country) => country.selected
        );
        const seasonSelected = this.seasonSelected;
        const impossibleRequest = !countrySelected || !seasonSelected;
        if (impossibleRequest) {
            return;
        }
        const { name } = countrySelected;
        this.changeLoading()
        const leaguesOfApi = this.api.getLeaguesForCountry(name).pipe(take(1));
        const addLeagues = ({ response }) => {
            const validLeagues = !!response.length;
            if (validLeagues) {
                this.leagues = response;
            }
            this.changeLoading()
        };
        leaguesOfApi.subscribe(addLeagues);
    }

    getSeasons() {
        console.log('buscou a season')
        return

        this.changeLoading()
        const seasonsOfApi = this.api.getSeasons().pipe(take(1));
        const addSeasons = ({ response }) => {
            const validSeasons = !!response.length;
            if (validSeasons) {
                this.seasons = response;
            }
            this.changeLoading()
        };
        seasonsOfApi.subscribe(addSeasons);
    }

    getTeams() {
        console.log('buscou o time')
        return

        const seasonSelected = this.seasonSelected;
        const leagueSelected = this.leagueSelected;
        const impossibleRequest = !seasonSelected || !leagueSelected;

        if (impossibleRequest) {
            return;
        }

        const { id } = leagueSelected;
        const teamsOfSeason = this.api
            .getTeamsOfSeason(seasonSelected, id)
            .pipe(take(1));
        const addTeams = ({ response }) => {
            const validTeams = !!response.length;
            if (validTeams) {
                this.teams = response;
            }
        };
        teamsOfSeason.subscribe(addTeams);
    }

    changeCountry() {
        this.clearAllCountries();
        this.clearCountry();
    }

    changeLeague() {
        this.clearLeague();
        this.clearSeason();
    }

    selectCountry(country) {
        const sameIndex = (countryOfList) =>
            countryOfList.code === country.code;
        const indexEncountered = this.countries.findIndex(sameIndex);
        const indexDoesntExists = indexEncountered === -1;
        if (indexDoesntExists) {
            this.countries[indexEncountered].selected = true;
        }
        this.countrySelected = !this.countrySelected;
        this.getLeagues
    }

    clearCountry() {
        this.countrySelected = !this.countrySelected;
    }

    clearAllCountries() {
        const deSelectedsCountries = (country) => {
            delete country.selected;
            return { ...country };
        };
        this.countries = this.countries.map(deSelectedsCountries);
    }

    seasonAreSelected(season) {
        this.seasonSelected = season;
    }

    clearSeason() {
        this.seasonSelected = 0;
    }

    leagueAreSelected(league) {
        this.leagueSelected = league;
    }

    clearLeague() {
        this.leagueSelected = null;
    }

    selectSeasonAndLeague(event) {
        const { league, season } = event;
        this.leagueAreSelected(league);
        this.seasonAreSelected(season);
        this.getTeams();
    }

    selectTeam(event) {
        console.log(event);
    }
}
