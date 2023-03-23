import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './netflix/netflixmain/netflixmain.component';
import { NetflixregiterComponent } from './netflix/netflixregiter/netflixregiter.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
    ,LoginComponent
    , RegisterComponent
    , NetflixindexComponent
    , NetflixheaderComponent
    , NetflixmainComponent
    , NetflixregiterComponent
    , DatabindingComponent
    , TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TwowaybindingComponent]
})
export class AppModule { }
