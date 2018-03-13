import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-search-results",
  templateUrl: "search-results.html"
})
export class SearchResultsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
