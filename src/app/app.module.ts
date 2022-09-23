import { NgModule } from '@angular/core';

//declarations
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

//imports
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
