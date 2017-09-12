import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB7rvjY5v3gN9o3Wf019MY4cU1Pz9r8Ym4",
  authDomain: "what-we-do-4d020.firebaseapp.com",
  databaseURL: "https://what-we-do-4d020.firebaseio.com",
  storageBucket: "what-we-do-4d020.appspot.com",
  messagingSenderId: "496919197960"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
