import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component({
  selector: "welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  constructor(public nav: NavController) {}

  goToLoginPage() {
    this.nav.push(LoginPage);
  }
  goToSignupPage() {
    this.nav.push(SignupPage);
  }
}
