import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  colors: string[] = [];
  selectedColor: string = "none";

  constructor(
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.colorsService.getColors().subscribe((colors: string[]) => {
      this.colors = colors;
    });
  }

  /**
  * Set the selected color to a new color
  * @param color The newly selected color as a string
  */
  setSelectedColor(color: string) {
    this.selectedColor = color;
  }

  /**
  * Reset the currently selected color to 'none'
  */
  clearSelectedColor() {
    this.selectedColor = "none";
  }

}
