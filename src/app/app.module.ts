import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JokeComponent } from './joke.component';
import { JokeListComponent } from './joke-list.component';
import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-from.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
