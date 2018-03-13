import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";

@Component({
  templateUrl: "more-detail-page.html"
})
export class MoreDetailPage {
  detail;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams
  ) {
    this.detail = navParams.data.detail;
  }
}
