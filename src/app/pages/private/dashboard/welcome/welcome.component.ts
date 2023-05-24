import { Component } from '@angular/core';
import { ApiFootbalService } from '@core/services/api-football.service';
import { take } from 'rxjs';
import { LocalStorageService } from '@core/services/localstorage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
    loading = false;
    countrySelected = false;
    countries = [];

    constructor(
        private api: ApiFootbalService,
        private localstorage: LocalStorageService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getCountries();
    }

    changeLoading() {
        this.loading = true;
    }

    changeUnloading() {
        this.loading = false;
    }

    getCountries() {
        this.changeLoading();
        this.api
            .getCountries()
            .pipe(take(1))
            .subscribe(({ response }) => {
                const validaCountries = !!response.length;
                if (validaCountries) {
                    // removi world pois não é país e esta sem bandeira
                    const minusWorld = (country) => country.name !== 'World';
                    this.countries = response.filter(minusWorld);
                }
                this.changeUnloading();
            });
    }

    goToCountry(country) {
        this.localstorage.set('country', country);
        this.router.navigate(['/dashboard/leagues', country.name]);
    }
}
