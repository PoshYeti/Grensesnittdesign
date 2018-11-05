import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import attractions from '../../assets/data/attractions';
import { Card } from './attractions.interface';
import { FavouritesPage } from '../favourites/favourites';


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



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ngOnInit(): void {
  this.attractions = attractions.attractions;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Top10Page');
  }

}
