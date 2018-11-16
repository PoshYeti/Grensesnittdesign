import { Component } from '@angular/core';
import { NavController, NavController, NavController, NavController, NavController, NavController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import { FavouritesPage } from '../favourites/favourites';
import { SearchPage } from '../search/search';
import { VisitedPage } from '../visited/visited';
import { HomePage } from '../home/home';



@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
    
})
export class SettingsPage {

    lang:any;

    constructor(public navCtrl: NavController, public translate: TranslateService) {
        this.lang = 'en';
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    switchLanguage() {
        this.translate.use(this.lang);
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
}

