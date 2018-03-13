import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AuthProvider } from "../providers/auth/auth";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FIREBASE_CONFIG } from "./app.firebase.config";

//PAGES
import { MyApp } from "./app.component";
import { TabsPage } from "../pages/tabs/tabs";
import { WelcomePage } from "../pages/welcome/welcome";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { PasswordResetPage } from "../pages/password-reset/password-reset";
import { ThankYouPage } from "../pages/thank-you/thank-you";
import { SearchPage } from "../pages/search/search";
import { MyBooksPage } from "../pages/my-books/my-books";
import { ScanPage } from "../pages/scan/scan";
import { MyPagesPage } from "../pages/my-pages/my-pages";
import { MorePage } from "../pages/more/more";
import { MoreDetailPage } from "../pages/more/more-detail-page";
import { SearchResultsPage } from "../pages/search-results/search-results";
import { UserProfilePage } from "../pages/user-profile/user-profile";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    UserProfilePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ThankYouPage,
    SearchPage,
    SearchResultsPage,
    PasswordResetPage,
    MyBooksPage,
    ScanPage,
    MyPagesPage,
    MorePage,
    MoreDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    UserProfilePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ThankYouPage,
    SearchPage,
    SearchResultsPage,
    PasswordResetPage,
    MyBooksPage,
    ScanPage,
    MyPagesPage,
    MorePage,
    MoreDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule {}
