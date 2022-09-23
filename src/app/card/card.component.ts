import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title: string;
  dimensions: Dimensions;
  liters: number | void;

  constructor() {
    this.title = 'Aquarium';
    this.dimensions = {
      height: 10,
      width: 10,
      length: 10,
    };
    this.liters = undefined;
  }

  ngOnInit(): void {
    if (
      this.dimensions.height &&
      this.dimensions.width &&
      this.dimensions.length
    ) {
      this.liters =
        (this.dimensions.height *
          this.dimensions.width *
          this.dimensions.length) /
        1000;
    }
  }
}

interface Dimensions {
  height: number;
  width: number;
  length: number;
}
