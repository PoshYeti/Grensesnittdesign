import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top10Page } from '../top10/top10';
import { SettingsPage } from '../settings/settings';
import { SearchPage } from '../search/search';

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
    this.navCtrl.push(Top10Page, type);
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
