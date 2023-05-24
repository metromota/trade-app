import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@components/components.module';

import { LoginComponent } from './public/login/login.component';
import { FormComponent } from './public/login/form/form.component';

@NgModule({
    declarations: [LoginComponent, FormComponent],
    imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
    exports: [LoginComponent, FormComponent],
})
export class PagesModule {}
