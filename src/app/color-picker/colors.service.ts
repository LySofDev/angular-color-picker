import { Injectable } from '@angular/core';
import { ColorPickerModule } from './color-picker.module';

@Injectable({
  providedIn: ColorPickerModule
})
export class ColorsService {

  constructor() { }

  /**
  * A collection of existing colors
  * @returns The HEX values for 6 colors
  */
  getColors(): string[] {
    return [
      "#450c41",
      "#61275d",
      "#86b5d5",
      "#2c7f84",
      "#224a72",
      "#000000"
    ];
  }
}
