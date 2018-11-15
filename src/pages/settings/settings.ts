import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';



@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
    
})
export class SettingsPage {
    lang:any;
    

     

 constructor(public translate: TranslateService) {
        this.lang = 'en';
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    switchLanguage() {
        this.translate.use(this.lang);
    }

 
}

