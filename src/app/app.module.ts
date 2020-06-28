import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCbDA3mEzUHyUkSOceZ9vMVUmrPMbvt13s",
  authDomain: "dbtodolist-d8d4b.firebaseapp.com",
  databaseURL: "https://dbtodolist-d8d4b.firebaseio.com",
  projectId: "dbtodolist-d8d4b",
  storageBucket: "dbtodolist-d8d4b.appspot.com",
  messagingSenderId: "28112932076",
  appId: "1:28112932076:web:5d6b23b0389a2c30fc69c9",
  measurementId: "G-WJNFZ20XCW",
  
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

