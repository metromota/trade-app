import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInputComponent } from './error-input/error-input.component';

@NgModule({
  declarations: [
    TitleComponent,
    CardComponent,
    ErrorInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TitleComponent,
    CardComponent,
    ErrorInputComponent,
  ]
})
export class ComponentsModule { }
