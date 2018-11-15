import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import attractions from '../../assets/data/attractions';
import { Card } from './attractions.interface';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

    searchQuery: string = '';
    attractions: Card[];
    

  constructor(public navCtrl: NavController) {
    this.initializeAttractions();
  }
  
  initializeAttractions() {
    this.attractions = attractions.attractions;
  }
  
  getItems(ev: any) {
    this.initializeAttractions();
    const val = ev.target.value;
    
    if(val && val.trim() != '') {
        this.attractions = this.attractions.filter((attractions) => {
            return (attractions.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }
  }

}