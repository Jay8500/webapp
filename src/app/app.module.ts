import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SharesModule } from './shares/shares.module';
import { ShowcartsModule } from './carts/showcarts/showcarts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ShowcartsModule,
    SharesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
