import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowMealModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-meal-modal',
  templateUrl: 'show-meal-modal.html',
})
export class ShowMealModalPage {

  mealPlan:any;
  mealType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.info(navParams.get('myData'));

    this.mealPlan = navParams.get('myData')['data'];
    this.mealType = navParams.get('myData')['mealType'];

  }

  ionViewDidLoad()
  {
    console.info(this.navParams.get('during'));
  }

}
