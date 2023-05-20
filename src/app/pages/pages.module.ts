import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';

import { ComponentsModule } from '@components/components.module';
import { FormComponent } from './public/login/form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    FormComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
