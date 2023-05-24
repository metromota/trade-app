import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Security } from '@core/security/security';
import { LocalStorageService } from '@core/services/localstorage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(
        private router: Router,
        private localstorage: LocalStorageService
    ) {}

    canActivate() {
        const isActive = this.localstorage.get('active');
        if (!isActive) {
            Security.removeApikey();
            this.localstorage.clear();
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
