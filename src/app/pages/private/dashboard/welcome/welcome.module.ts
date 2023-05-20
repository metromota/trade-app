import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRountingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    WelcomeRountingModule,
    ComponentsModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
