import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    declarations: [LeaguesComponent],
    imports: [CommonModule, LeaguesRoutingModule, ComponentsModule],
})
export class LeaguesModule {}
