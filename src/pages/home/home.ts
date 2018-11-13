import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top10Page } from '../top10/top10';
import { settings} from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  attBtnClickMuseum() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickShopping() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickLandmark() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickRestaurant() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickPark() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickHop() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickStar() {
    this.navCtrl.push(Top10Page);
  }
  attBtnClickRoute() {
    this.navCtrl.push(Top10Page);
  }

}
