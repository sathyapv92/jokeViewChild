import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AppComponent,JokeComponent,JokeListComponent} from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

