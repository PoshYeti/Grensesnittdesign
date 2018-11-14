import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import attractions from '../../assets/data/attractions';
import { Card } from './attractions.interface';
import { FavouritesPage } from '../favourites/favourites';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageType = navParams.get('type');
  }

  ngOnInit(): void {
    this.attractions = attractions.attractions;
    this.attractionsByCat = this.attractions.filter(obj => {
      return obj.tags.includes(this.pageType);
    });
    console.log(this.attractionsByCat);
  }

  

  openAttractionDetails(attraction: Card) {
    this.navCtrl.push(AttractionDetailPage, { attraction });
  }

  selected() {
    return "visible";
  }

  btnFavourite(attraction: Card) {
    console.log(attraction.favourite)
    let index = this.attractions.findIndex(obj => obj.name == attraction.name);
    //console.log(this.attractions[index]);
  };


  sortByStarsClick() {
    this.attractions.sort(function (a, b) {
      return b.stars - a.stars
    });
  }
  sortByDistanceClick() {
    this.attractions.sort(function (a, b) {
      return a.distance - b.distance
    });
  }
  sortByPriceClick() {
    this.attractions.sort(function (a, b) {
      return a.price - b.price
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Top10Page');
  }

}
