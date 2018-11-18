import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { VisitedPage } from '../visited/visited';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';
import attractions from '../../assets/data/attractions';
import { Card } from '../top10/attractions.interface';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';

@Component({
  selector: 'page-routes',
  templateUrl: 'routes-detail.html'
})
export class RoutesPage {
  attractions: Card[];
  attraction: Card[];


  constructor( public navCtrl: NavController ) {
    this.attractions = attractions.attractions;

  }

  attractionClick( attractionName: string ){
    
    this.attraction = this.attractions.filter(obj => {
      return obj.name.includes( attractionName );
    });
    console.log( this.attraction );
    let attraction = this.attraction[0];
    this.navCtrl.push(AttractionDetailPage, { attraction });
  }

  btnSettings() {
    this.navCtrl.push( SettingsPage );
  }

  btnHome() {
    this.navCtrl.push( HomePage );
  }

  btnSearch() {
    this.navCtrl.push( SearchPage );
  }

  btnFavourites() {
    this.navCtrl.push( FavouritesPage );
  }

  btnSeen() {
    this.navCtrl.push( VisitedPage );
  }

}