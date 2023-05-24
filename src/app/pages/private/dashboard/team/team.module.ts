import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRountingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    declarations: [TeamComponent],
    imports: [CommonModule, TeamRountingModule, ComponentsModule],
})
export class TeamModule {}
