import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarComponent } from './home-car/home-car.component';
import { LowerHomeComponent } from './lower-home/lower-home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { VehicalListingModule } from './vehical-listing/vehical-listing.module';
import { ContactModule } from './contact/contact.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarComponent,
    LowerHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, FormsModule,
    AuthenticationModule, VehicalListingModule, ContactModule, NgOtpInputModule
  ],
  exports: [  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
