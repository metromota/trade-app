import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '@core/routeguards/authguard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                canActivate: [AuthGuardService],
                loadChildren: () =>
                    import('./welcome/welcome.module').then(
                        (m) => m.WelcomeModule
                    ),
            },
            {
                path: 'team/:id',
                pathMatch: 'full',
                canActivate: [AuthGuardService],
                loadChildren: () =>
                    import('./team/team.module').then((m) => m.TeamModule),
            },
            {
                path: 'leagues/:country',
                pathMatch: 'full',
                canActivate: [AuthGuardService],
                loadChildren: () =>
                    import('./leagues/leagues.module').then(
                        (m) => m.LeaguesModule
                    ),
            },
            {
                path: 'teams/:season/:league',
                pathMatch: 'full',
                canActivate: [AuthGuardService],
                loadChildren: () =>
                    import('./teams/teams.module').then((m) => m.TeamsModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
