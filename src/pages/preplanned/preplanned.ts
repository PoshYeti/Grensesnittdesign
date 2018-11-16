import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoutesPage } from '../routes-detail/routes-detail';

@Component({
  selector: 'page-preplanned',
  templateUrl: 'preplanned.html'
})
export class PreplannedPage {

  constructor(public navCtrl: NavController) {

  }
   openRoutes(){
    this.navCtrl.push(RoutesPage);
  }
}