import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top10Page } from '../top10/top10';
import { SettingsPage } from '../settings/settings';
import { FavouritesPage } from '../favourites/favourites';
import { SearchPage } from '../search/search';
import { VisitedPage } from '../visited/visited';
import { PreplannedPage } from '../preplanned/preplanned';


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

  btnPlanned(){
    this.navCtrl.push(PreplannedPage);
  }


  attBtnClick(type: string, icon: string) {
    this.navCtrl.push(Top10Page, {
      type: type,
      icon: icon
    });
  }

  attBtnClickMuseum(type: string, icon: string) {
    this.navCtrl.push(Top10Page, { 
      type: type,
      icon: icon
    });
  }
 
  attBtnClickRoute(type: string) {
    this.navCtrl.push(Top10Page, { type: type });
  }
}