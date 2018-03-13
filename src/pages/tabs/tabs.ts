import { Component } from "@angular/core";

import { SearchPage } from "../search/search";
import { MyBooksPage } from "../my-books/my-books";
import { ScanPage } from "../scan/scan";
import { MyPagesPage } from "../my-pages/my-pages";
import { MorePage } from "../more/more";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = SearchPage;
  tab2Root = MyBooksPage;
  tab3Root = ScanPage;
  tab4Root = MyPagesPage;
  tab5Root = MorePage;

  constructor() {}
}
