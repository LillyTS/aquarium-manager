import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title: string;
  dimensions: Dimensions;
  liters: number | null;

  constructor() {
    this.title = 'Aquarium';
    this.dimensions = {
      height: 10,
      width: 10,
      length: 10,
    };
    this.liters = null;
  }

  ngOnInit(): void {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/users/heQyO6VnDeazONcYLgBQVa6GfEJ2`))
      .then((snapshot) => {
        if (snapshot.exists()) {
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
