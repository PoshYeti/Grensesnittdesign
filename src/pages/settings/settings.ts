import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

    constructor(public navCtrl: NavController) {
    }

    lang:any;
    
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
     

 constructor(public translate: TranslateService) {
        this.lang = 'en';
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    switchLanguage() {
        this.translate.use(this.lang);
    }

 
}

