import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageUsersComponent } from './Components/manage-users/manage-users.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
