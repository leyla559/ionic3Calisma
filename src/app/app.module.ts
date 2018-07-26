import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home';
import { UserListPage } from './../pages/user-list/user-list';
import { CallCenterPage } from './../pages/call-center/call-center';
import { CallAddPage } from './../pages/call-add/call-add';
import { MessagePage } from './../pages/message/message';
import { NewMessagePage } from './../pages/new-message/new-message';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserListPage,
    CallCenterPage,
    CallAddPage,
    MessagePage,
    NewMessagePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserListPage,
    CallCenterPage,
    CallAddPage,
    MessagePage,
    NewMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
