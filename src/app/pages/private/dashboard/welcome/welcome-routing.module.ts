import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: WelcomeComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRountingModule {}
