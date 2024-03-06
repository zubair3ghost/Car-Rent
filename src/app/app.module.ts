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
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { PopUpComponent } from './pop-up/pop-up.component';


//mat modules for pop up
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarComponent,
    LowerHomeComponent,
    FooterComponent,
    PopUpComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, FormsModule,
    AuthenticationModule, VehicalListingModule, ContactModule, NgOtpInputModule,

     BrowserAnimationsModule ,MatDialogModule,MatButtonModule,MatSlideToggleModule 

  ],
  exports: [  
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

