import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Top10Page } from '../pages/top10/top10';
import { SettingsPage } from '../pages/settings/settings';
import { AttractionDetailPage } from '../pages/attraction-detail/attraction-detail';
import { TabsPage } from '../pages/tabs/tabs.module.ts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Top10Page,
    SettingsPage,
    AttractionDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Top10Page,
    SettingsPage,
    AttractionDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
