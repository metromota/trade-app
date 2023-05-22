import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: TeamComponent,
    },
]
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TeamRountingModule { }
