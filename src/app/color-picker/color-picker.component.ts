import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  colors: string[] = [];

  constructor(
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.colorsService.getColors().subscribe((colors: string[]) => {
      this.colors = colors;
    });
  }

}
