import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import attractions from '../../assets/data/attractions';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

    searchQuery: string = '';
    items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  
  initializeItems() {
    this.items = attractions.attractions;
  }
  
  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    
    if(val && val.trim() != '') {
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }
  }

}