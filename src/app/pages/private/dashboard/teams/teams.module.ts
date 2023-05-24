import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { ComponentsModule } from '@components/components.module';
import { TeamsRountingModule } from './teams-routing.module';

@NgModule({
    declarations: [TeamsComponent],
    imports: [CommonModule, TeamsRountingModule, ComponentsModule],
})
export class TeamsModule {}
