import { Routes } from '@angular/router';
import { DashboardComponent } from '@pages/private/dashboard/dashboard.component';

const Routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [

        ]
    }
]

export { Routes }