import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Routes as PublicRoutes } from '@routing/public';
import { Routes as PrivateRoutes } from '@routing/private';

const routes: Routes = [
  ...PublicRoutes,
  ...PrivateRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
