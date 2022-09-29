import { Component, Input, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
import { Aquarium } from '../models/aquarium.model';
// import { getAuth } from "firebase/auth";

const myUser: string = 'heQyO6VnDeazONcYLgBQVa6GfEJ2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() aquarium: Aquarium;

  constructor(aquarium: Aquarium) {
    this.aquarium = aquarium;
  }

  aquariumFish: string = '';
  aquariumSnails: string = '';
  aquariumShrimps: string = '';
  aquariumPlants: string = '';

  ngOnInit(): void {
    //const auth = getAuth();

    if (this.aquarium.fish && this.aquarium.fish != null) {
      Object.keys(this.aquarium.fish).forEach(
        (name: string) =>
          (this.aquariumFish += ` ${name} (${this.aquarium.fish[name].quantity})\n`)
      );
    }
    if (this.aquarium.snails && this.aquarium.snails != null) {
      Object.keys(this.aquarium.snails).forEach((name: string) => {
        if (this.aquarium.snails[name] != null) {
          this.aquariumSnails += ` ${name} (${this.aquarium.snails[name].quantity})\n`;
        }
      });
    }
    if (this.aquarium.shrimps && this.aquarium.shrimps != null) {
      Object.keys(this.aquarium.shrimps).forEach((name: string) => {
        if (this.aquarium.shrimps[name]) {
          this.aquariumShrimps += ` ${name} (${this.aquarium.shrimps[name].quantity})\n`;
        }
      });
    }
    if (this.aquarium.plants && this.aquarium.plants != null) {
      Object.keys(this.aquarium.plants).forEach((name: string) => {
        if (this.aquarium.plants[name] != null) {
          this.aquariumPlants += ` ${name} \n`;
        }
      });
    }

    if (
      this.aquarium.dimensions.height &&
      this.aquarium.dimensions.width &&
      this.aquarium.dimensions.length
    ) {
      this.aquarium.liters =
        (this.aquarium.dimensions.height *
          this.aquarium.dimensions.width *
          this.aquarium.dimensions.length) /
        1000;
    }

    if (
      this.aquarium.dimensions.height &&
      this.aquarium.dimensions.width &&
      this.aquarium.dimensions.length
    ) {
      this.aquarium.liters =
        (this.aquarium.dimensions.height *
          this.aquarium.dimensions.width *
          this.aquarium.dimensions.length) /
        1000;
    }
  }
}
