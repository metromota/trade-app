import { Component } from '@angular/core';
import { Security } from '@core/security/security';
import { LocalStorageService } from '@core/services/localstorage.service';
import { ApiFootbalService } from '@core/services/api-football.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(
        private api: ApiFootbalService,
        private router: Router,
        private localstorage: LocalStorageService
    ) {}

    authenticate(event) {
        const { apikey } = event;
        Security.setApikey(apikey);

        const nextObservable = (resp) => {
            const { response } = resp;
            const responseInvalid = Array.isArray(response);

            if (responseInvalid) {
                alert('Apikey inválido');
                return;
            }

            const isActive = this.isActiveAccount(response);

            if (isActive) {
                this.localstorage.set('active', true);
                this.router.navigate(['/dashboard']);
            } else {
                Security.removeApikey();
                this.localstorage.clear();
            }
        };

        const error = (err) => {
            Security.removeApikey();
            this.localstorage.clear();
        };

        this.api.authentication().subscribe(nextObservable, error);
    }

    isActiveAccount({ subscription }) {
        return !!subscription.active;
    }
}
