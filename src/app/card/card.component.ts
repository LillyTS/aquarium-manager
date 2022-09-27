import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
// import { getAuth } from "firebase/auth";

const myUser: string = 'heQyO6VnDeazONcYLgBQVa6GfEJ2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title: string;
  dimensions: Dimensions;
  liters: number | null;
  fish: string | null;
  snails: string | null;
  shrimps: string | null;
  plants: string | null;

  constructor() {
    this.title = 'Aquarium';
    this.dimensions = {
      height: null,
      width: null,
      length: null,
    };
    this.liters = null;
    this.fish = '';
    this.snails = '';
    this.shrimps = '';
    this.plants = '';
  }

  ngOnInit(): void {
    //const auth = getAuth();

    const dbRef = ref(getDatabase());
    get(child(dbRef, `/users/${myUser}/aquariums`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const aquarium = snapshot.val().aquarium1;
          this.title = aquarium.name;
          Object.keys(aquarium.fish).forEach(
            (name: string) =>
              (this.fish += ` ${name} (${aquarium.fish[name].quantity})\n`)
          );

          Object.keys(aquarium.snails).forEach(
            (name: string) =>
              (this.snails += ` ${name} (${aquarium.snails[name].quantity})\n`)
          );
          Object.keys(aquarium.shrimps).forEach(
            (name: string) =>
              (this.shrimps += ` ${name} (${aquarium.shrimps[name].quantity})\n`)
          );
          Object.keys(aquarium.plants).forEach(
            (name: string) => (this.plants += ` ${aquarium.plants[name]}\n`)
          );

          this.dimensions.height = aquarium.dimensions.height;
          this.dimensions.width = aquarium.dimensions.width;
          this.dimensions.length = aquarium.dimensions.length;
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
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });

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
  height: number | null;
  width: number | null;
  length: number | null;
}
