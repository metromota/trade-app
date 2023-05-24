import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInputComponent } from './error-input/error-input.component';
import { CardCountryComponent } from './card-country/card-country.component';
import { CardSeasonComponent } from './card-season/card-season.component';
import { CardLeaguesComponent } from './card-leagues/card-leagues.component';
import { CardTeamsComponent } from './card-teams/card-teams.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { CardPlayerComponent } from './card-player/card-player.component';

@NgModule({
    declarations: [
        TitleComponent,
        CardComponent,
        ErrorInputComponent,
        CardCountryComponent,
        CardSeasonComponent,
        CardLeaguesComponent,
        CardTeamsComponent,
        LoadingComponent,
        CardPlayerComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        TitleComponent,
        CardComponent,
        ErrorInputComponent,
        CardCountryComponent,
        CardSeasonComponent,
        CardLeaguesComponent,
        CardTeamsComponent,
        LoadingComponent,
        CardPlayerComponent,
    ],
})
export class ComponentsModule {}
