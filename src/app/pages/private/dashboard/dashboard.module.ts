import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TeamModule } from './team/team.module';
import { LeaguesModule } from './leagues/leagues.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        WelcomeModule,
        TeamModule,
        LeaguesModule,
    ],
})
export class DashboardModule {}
