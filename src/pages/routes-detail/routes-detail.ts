import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { VisitedPage } from '../visited/visited';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-routes',
  templateUrl: 'routes-detail.html'
})
export class RoutesPage {
  

  constructor(public navCtrl: NavController) {

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