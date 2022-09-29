import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, child, get } from 'firebase/database';
import { Aquarium } from './models/aquarium.model';

const myUser: string = 'heQyO6VnDeazONcYLgBQVa6GfEJ2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Aquarium],
})
export class AppComponent implements OnInit {
  title = 'aquarium-manager';
  aquariums: Array<Aquarium> = [];
  ngOnInit(): void {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/users/${myUser}/aquariums`)).then((snapshot) => {
      if (snapshot.exists()) {
        Object.entries(snapshot.val()).forEach((aquarium: any) =>
          this.aquariums.push(aquarium[1])
        );
      }
    });
  }
}
