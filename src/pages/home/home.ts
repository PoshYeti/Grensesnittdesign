import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top10Page } from '../top10/top10';
import { SettingsPage } from '../settings/settings';
import { FavouritesPage } from '../favourites/favourites';
import { SearchPage } from '../search/search';
import { VisitedPage } from '../visited/visited';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  btnSettings(){
    this.navCtrl.push(SettingsPage);
  }
  
  btnSearch(){
    this.navCtrl.push(SearchPage);
  }

  attBtnClickMuseum(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickShopping(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickLandmark(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickRestaurant(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickPark(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickHop(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickStar(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
  attBtnClickRoute(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }

}

export class TabsPage {

  homePage = HomePage;
  favouritesPage = FavouritesPage;
  searchPage = SearchPage;
  visitedPage = VisitedPage;

}