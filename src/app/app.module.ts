import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsercardComponent } from './usercard/usercard.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { FriendComponent } from './friend/friend.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsercardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendlistComponent,
    FriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }