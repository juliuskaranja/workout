import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {GMaps} from "../about/about";
import {GeocodingServiceProvider} from "../../providers/geocoding-service/geocoding-service";



/**
 * Generated class for the PersonalProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-profile',
  templateUrl: 'personal-profile.html',
})
export class PersonalProfilePage {

  user:any;
  location:any;
    lat: number;
    lng: number;
    map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public geo: GeocodingServiceProvider) {
    this.user = this.navParams.get('user');
      this.location = this.geo.getCoordinateForCurrentLocation();
      console.info(this.location);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalProfilePage');
  }


}
