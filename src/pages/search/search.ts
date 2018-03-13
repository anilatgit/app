import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SearchResultsPage } from "../search-results/search-results";

@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  constructor(public nav: NavController, public navParams: NavParams) {}

  goToSearchResultsPage() {
    this.nav.push(SearchResultsPage);
  }
}
