import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import attractions from '../../assets/data/attractions';
import { Card } from '../top10/attractions.interface';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { VisitedPage } from '../visited/visited';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  attractions: Card[];
  favouriteAttractions: Card[];

  constructor(public navCtrl: NavController) {
    this.attractions = attractions.attractions;
    this.favouriteAttractions = this.attractions.filter(obj => {
      return obj.favourite;
    })
    console.log(this.favouriteAttractions);
  }
  isTop10(attraction: Card) {
    return attraction.tags.includes('Top 10');
  }

  changeFavourite(attraction: Card) {
    if (attraction.favourite) {
      attraction.favourite = false;
    } else {
      attraction.favourite = true;
    }
  };

  changeSeen(attraction: Card) {
    if (attraction.seen) {
      attraction.seen = false;
    } else {
      attraction.seen = true;
    }
  }

  openAttractionDetails(attraction: Card) {
    this.navCtrl.push(AttractionDetailPage, { attraction });
  }

  //bottom-navbar
  btnHome() {
    this.navCtrl.push(HomePage);
  }

  btnSearch() {
    this.navCtrl.push(SearchPage);
  }

  btnFavourites() {
    this.navCtrl.push(FavouritesPage);
  }

  btnSeen() {
    this.navCtrl.push(VisitedPage);
  }
}
