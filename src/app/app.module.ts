import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarComponent } from './home-car/home-car.component';
import { LowerHomeComponent } from './lower-home/lower-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarComponent,
    LowerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
