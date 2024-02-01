import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { UserPannelComponent } from './user-pannel/user-pannel.component';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactInfoComponent,
    UserPannelComponent,
    HistoryComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
})
export class ContactModule { }
