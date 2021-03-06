import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorPickerModule } from './color-picker.module';

@Injectable({
  providedIn: ColorPickerModule
})
export class ColorsService {

  /**
  * A collection of existing colors
  * @returns The HEX values for 6 colors as an Observable list of strings
  */
  getColors(): Observable<string[]> {
    return of([
      "#450c41",
      "#61275d",
      "#86b5d5",
      "#2c7f84",
      "#224a72",
    ]);
  }
  
}
