import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ColorsService } from './colors.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ColorPickerComponent
  ],
  declarations: [
    ColorPickerComponent
  ],
  providers: [
    ColorsService
  ]
})
export class ColorPickerModule { }
