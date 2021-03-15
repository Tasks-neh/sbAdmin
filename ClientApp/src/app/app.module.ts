import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { VideoComponent } from './video/video/video.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotComponent } from './forgot/forgot.component';
import { Header2Component } from './header2/header2.component';
import { CardComponent } from './video/card/card.component';
import { CardListComponent } from './video/card-list/card-list.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VideoService } from './video.service';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    //VideoComponent,
    LoginComponent,
    MessageComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    UserCardComponent,
    UserListComponent,
    ForgotComponent,
    Header2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
