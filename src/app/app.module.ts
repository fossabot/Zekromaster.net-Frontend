import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CookieLawModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
