import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import firebase from "firebase";
import { FIREBASE_CONFIG } from "./app.firebase.config";

//PAGES
import { WelcomePage } from "../pages/welcome/welcome";
//import { TabsPage } from "../pages/tabs/tabs";
//import { UserProfilePage } from "../pages/user-profile/user-profile";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = WelcomePage;
  //rootPage: any = TabsPage;
  //rootPage: any = UserProfilePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    firebase.initializeApp(FIREBASE_CONFIG);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
