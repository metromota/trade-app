import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        // const token = localStorage.getItem('token');
        // if (!token) {
        //     this.router.navigate(['/login']);
        //     return false;
        // }
        console.log('token yes');

        return true;
    }

}