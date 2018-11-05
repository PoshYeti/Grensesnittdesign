import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Top10Page } from '../top10/top10';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  attBtnClick() {
    this.navCtrl.push(Top10Page);
  }

}
