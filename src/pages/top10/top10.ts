import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import attractions from '../../assets/data/attractions';
import { Card } from './attractions.interface';
import { FavouritesPage } from '../favourites/favourites';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { SettingsPage } from '../settings/settings';


/**
 * Generated class for the Top10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top10',
  templateUrl: 'top10.html',
})
export class Top10Page {
  attractions: Card[];
  attractionsByCat: Card[];
  pageType: string;
  pageIcon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageType = navParams.get('type');
    this.pageIcon = navParams.get('icon');
    console.log(this.pageIcon);
  }

  ngOnInit(): void {
    this.attractions = attractions.attractions;
    this.attractionsByCat = this.attractions.filter(obj => {
      return obj.tags.includes(this.pageType);
    });
  }

  openAttractionDetails(attraction: Card) {
    this.navCtrl.push(AttractionDetailPage, { attraction });
  }

  changeFavourite(attraction: Card) {
    if(attraction.favourite) {
      attraction.favourite = false;
    } else {
      attraction.favourite = true;
    }
  };

  changeSeen(attraction: Card){
    if(attraction.seen) {
      attraction.seen = false;
    } else {
      attraction.seen = true;
    }
  }

  isTop10(attraction: Card){
      return attraction.tags.includes('Top 10');
  }

  sortByStarsClick() {
    this.attractionsByCat.sort(function (a, b) {
      return b.stars - a.stars
    });
  }
  sortByDistanceClick() {
    this.attractionsByCat.sort(function (a, b) {
      return a.distance - b.distance
    });
  }
  sortByPriceClick() {
    this.attractionsByCat.sort(function (a, b) {
      return a.price - b.price
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Top10Page');
  }

  btnSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
