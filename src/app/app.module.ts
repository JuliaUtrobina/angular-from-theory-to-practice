import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JokeComponent } from './joke.component';
import { JokeListComponent } from './joke-list.component';

@NgModule({
  declarations: [
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
