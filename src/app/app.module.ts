import { NgModule } from '@angular/core';

//declarations
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

//imports
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CardAddComponent } from './card-add/card-add.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
