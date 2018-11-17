import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoutesPage } from '../routes-detail/routes-detail';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { VisitedPage } from '../visited/visited';
import { SearchPage } from '../search/search';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-preplanned',
  templateUrl: 'preplanned.html'
})
export class PreplannedPage {

  constructor(public navCtrl: NavController) {

  }
   openRoutes(){
    this.navCtrl.push(RoutesPage);
  }

  btnSettings() {
    this.navCtrl.push(SettingsPage);
  }

  btnHome(){
    this.navCtrl.push(HomePage);
  }
  
  btnSearch(){
    this.navCtrl.push(SearchPage);
  }

  btnFavourites(){
    this.navCtrl.push(FavouritesPage);
  }

  btnSeen(){
    this.navCtrl.push(VisitedPage);
  }
}