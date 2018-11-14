import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { VisitedPage } from '../visited/visited';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  homePage = HomePage;
  favouritesPage = FavouritesPage;
  searchPage = SearchPage;
  visitedPage = VisitedPage;

}