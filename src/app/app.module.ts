import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatPage} from "../pages/chat/chat";
import {AngularFireDatabaseModule , AngularFireDatabase} from 'angularfire2/database';


var config =  {
  apiKey: "AIzaSyC5UvwYlkN-FoVIWrl-tmrRoNEUu2CEOVA",
  authDomain: "chat-384b3.firebaseapp.com",
  databaseURL: "https://chat-384b3.firebaseio.com",
  projectId: "chat-384b3",
  storageBucket: "",
  messagingSenderId: "445536698893"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
