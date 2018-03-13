import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
// We import the authentication provider to test the log-out function.
import { AuthProvider } from "../../providers/auth/auth";
import { MoreDetailPage } from "./more-detail-page";
import { WelcomePage } from "../welcome/welcome";

@Component({
  selector: "page-more",
  templateUrl: "more.html"
})
export class MorePage {
  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public http: Http
  ) {}

  details = [
    {
      title: "About Us",
      icon: "md-information",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sodales nunc. Morbi finibus ante viverra, auctor nisi quis, eleifend est. Etiam imperdiet, velit eget varius auctor, metus metus sodales augue, eu hendrerit elit leo vel lectus."
    },
    {
      title: "Help",
      icon: "md-help",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sodales nunc. Morbi finibus ante viverra, auctor nisi quis, eleifend est. Etiam imperdiet, velit eget varius auctor, metus metus sodales augue, eu hendrerit elit leo vel lectus."
    },
    {
      title: "FAQ's",
      icon: "md-chatboxes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sodales nunc. Morbi finibus ante viverra, auctor nisi quis, eleifend est. Etiam imperdiet, velit eget varius auctor, metus metus sodales augue, eu hendrerit elit leo vel lectus."
    }
  ];

  openMoreDetailsPage(detail) {
    this.nav.push(MoreDetailPage, { detail: detail });
  }

  logMeOut() {
    this.authProvider.logoutUser().then(() => {
      this.nav.setRoot(WelcomePage);
    });
  }
}
