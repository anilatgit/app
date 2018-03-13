import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Profile } from "../../providers/user-profile";
import { SearchPage } from "../search/search";

@Component({
  selector: "page-user-profile",
  templateUrl: "user-profile.html"
})
export class UserProfilePage {
  userprofile = {} as Profile;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  createUserProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase
        .object(`userprofile/${auth.uid}`)
        .set(this.userprofile)
        .then(() => this.navCtrl.setRoot(SearchPage));
    });
  }
}
