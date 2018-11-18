import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import attractions from '../../assets/data/attractions';
import { Card } from './attractions.interface';
import { AttractionDetailPage } from '../attraction-detail/attraction-detail';
import { HomePage } from '../home/home';
import { FavouritesPage } from '../favourites/favourites';
import { VisitedPage } from '../visited/visited';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

    searchQuery: string = '';
    attractions: Card[];
    

  constructor( public navCtrl: NavController ) {
    this.initializeAttractions();
  }
  
  initializeAttractions() {
    this.attractions = attractions.attractions;
  }
  
  toggleSection( i ) {
    this.attractions[i].GUI_isOpen = !this.attractions[i].GUI_isOpen;
  }
  
  openAttractionDetails( attraction: Card)  {
    this.navCtrl.push(AttractionDetailPage, { attraction });
  }
  
  changeSeen( attraction: Card ){
    if(attraction.seen) {
      attraction.seen = false;
    } else {
      attraction.seen = true;
    }
  }
  
  changeFavourite( attraction: Card ) {
    if( attraction.favourite ) {
      attraction.favourite = false;
    } else {
      attraction.favourite = true;
    }
  };
  
  isTop10( attraction: Card ){
      return attraction.tags.includes('Top 10');
  }
  
  getItems( ev: any ) {
    this.initializeAttractions();
    const val = ev.target.value;
    
    if(val && val.trim() != '') {
        this.attractions = this.attractions.filter((attractions) => {
            return (attractions.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    }
  }

  //bottom-navbar
  btnHome() {
    this.navCtrl.push( HomePage );
  }

  btnSearch() {
    this.navCtrl.push( SearchPage );
  }

  btnFavourites() {
    this.navCtrl.push( FavouritesPage );
  }

  btnSeen() {
    this.navCtrl.push( VisitedPage );
  }
}

