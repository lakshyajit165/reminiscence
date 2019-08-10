import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyD2adlxVujPys9MBc0I4Ugrk4uD3iYa0t8',
  authDomain: 'reminiscence-70637.firebaseapp.com',
  databaseURL: 'https://reminiscence-70637.firebaseio.com',
  projectId: 'reminiscence-70637',
  storageBucket: '',
  messagingSenderId: '176285555752',
  appId: '1:176285555752:web:68dd8d7fa40a940b'
});


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
