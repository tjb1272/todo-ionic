import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {Items} from "../providers/items";
import {HttpModule} from "@angular/http";
import {Api} from "../providers/api";
import {ItemCreatePage} from "../pages/item-create/item-create";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemCreatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    Items,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
