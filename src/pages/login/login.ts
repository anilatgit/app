import { Component, NgZone } from "@angular/core";
import {
  NavController,
  Loading,
  LoadingController,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email-validator";
import firebase from "firebase";

//PAGES
import { SignupPage } from "../signup/signup";
import { PasswordResetPage } from "../password-reset/password-reset";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: "login",
  templateUrl: "login.html"
})
export class LoginPage {
  public loginForm: FormGroup;
  public loading: Loading;
  public zone: NgZone;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public authProvider: AuthProvider
  ) {
    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged(user => {
      this.zone.run(() => {
        if (!user) {
        }
      });
    });

    this.loginForm = formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authProvider
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(
          authData => {
            this.loading.dismiss().then(() => {
              this.navCtrl.setRoot(TabsPage, {});
            });
          },
          error => {
            this.loading.dismiss().then(() => {
              let alert = this.alertCtrl.create({
                message: error.message,
                buttons: [
                  {
                    text: "Ok",
                    role: "cancel"
                  }
                ]
              });
              alert.present();
            });
          }
        );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
  goToResetPassword() {
    this.navCtrl.push(PasswordResetPage);
  }
}
